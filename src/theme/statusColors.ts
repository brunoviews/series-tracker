import { ItemStatus } from '@/types/app.types';

// Importar siempre desde aquí — nunca definir colores de status inline.
export const STATUS_COLORS: Record<ItemStatus, string> = {
  [ItemStatus.Watching]: '#2DD4BF', // teal   → activamente viendo
  [ItemStatus.Completed]: '#22C55E', // verde  → completada
  [ItemStatus.Planned]: '#FBBF24', // ámbar  → pendiente
  [ItemStatus.Dropped]: '#F43F5E', // rosa   → abandonada
};
