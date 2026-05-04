---
name: create-component
description: 'Scaffold a new component or view for Binged. Use when creating a new React Native component in src/components/ or a new screen in src/views/. Generates the correct 4-file structure: index.tsx, styles.ts, types.ts, and viewmodel.ts. Triggers on: "create component", "new component", "add screen", "new view", "scaffold", "new page".'
argument-hint: 'ComponentName or ViewName (e.g. "RatingBadge" or "stats view")'
---

# Create Component / View

Scaffolds the standard 4-file structure for **Binged** components and views.

## When to Use

- Creating a new reusable component → `src/components/<Name>/`
- Creating a new screen → `src/views/<name>/`

## Procedure

### 1. Determine type and name

Ask the user (or infer from the argument):

- **Type**: component (`src/components/`) or view/screen (`src/views/`)
- **Name**: PascalCase for the folder (e.g. `RatingBadge`, `Stats`)
- **Props**: what data it receives (for `types.ts`)
- **Logic**: does it need navigation, context, or async calls? (drives `viewmodel.ts` complexity)

### 2. Create the 4 files

Use the templates in `./assets/` as a starting point, adapting to the user's inputs.

#### File responsibilities

| File           | Contains                                                                                           |
| -------------- | -------------------------------------------------------------------------------------------------- |
| `index.tsx`    | JSX only — no state, no handlers. Calls `useViewModel()` at the top                                |
| `styles.ts`    | styled-components primitives using `theme` tokens. Import `styled` from `styled-components/native` |
| `types.ts`     | Prop types (TypeScript `type`, not `interface`)                                                    |
| `viewmodel.ts` | `export const useViewModel = (...) => { ... }` — all state, handlers, navigation, context          |

#### Critical rules

- **Never** put business logic or `useState`/`useEffect` in `index.tsx`
- **Never** use relative paths — always use path aliases (`@components`, `@theme`, `@context`, etc.)
- **Never** use literal screen name strings — use `ScreenType` enum from `@navigation/types`
- **Never** use `StyleSheet.create` — use styled-components primitives
- Theme tokens come from `useTheme()` imported from `styled-components/native`
- All UI strings must use `t('key')` from `react-i18next`; add keys to both `src/i18n/locales/es.ts` and `src/i18n/locales/en.ts`

### 3. Wire up (if it's a view/screen)

- Add the screen to `ScreenType` enum in `src/navigation/types.ts` if it's a new route
- Add it to the appropriate navigator (`src/navigation/index.tsx` or `src/navigation/MainNavigator.tsx`)
- Add route params to the correct param list (`RootParamsList` or `TabParamsList`)

### 4. Reference templates

- [Component template](./assets/component-template/)
- [View template](./assets/view-template/)
