import type { TextVariant } from '@theme/types';
import { css } from 'styled-components/native';

// Cada clave mapea a un bloque css`` con las propiedades tipográficas correspondientes.
// Al estar en css`` (no en objetos planos), styled-components las interpola directamente
// en el template string del componente, lo que permite incluir cualquier propiedad CSS/RN.
export const variantStyles: Record<TextVariant, ReturnType<typeof css>> = {
  'display-1': css`
    font-family: 'DMSerifDisplay_400Regular';
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -1px;
  `,
  'display-2': css`
    font-family: 'DMSerifDisplay_400Regular';
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.5px;
  `,
  'title-1': css`
    font-family: 'SpaceMono_700Bold';
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.5px;
  `,
  'title-2': css`
    font-family: 'SpaceMono_700Bold';
    font-size: 22px;
    line-height: 28px;
  `,
  'title-3': css`
    font-family: 'SpaceMono_400Regular';
    font-size: 18px;
    line-height: 24px;
  `,
  headline: css`
    font-family: 'SpaceMono_700Bold';
    font-size: 16px;
    line-height: 22px;
  `,
  subheadline: css`
    font-family: 'SpaceMono_400Regular';
    font-size: 15px;
    line-height: 20px;
  `,
  'body-1-regular': css`
    font-family: 'SpaceMono_400Regular';
    font-size: 16px;
    line-height: 24px;
  `,
  'body-1-medium': css`
    font-family: 'SpaceMono_700Bold';
    font-size: 16px;
    line-height: 24px;
  `,
  'body-2-regular': css`
    font-family: 'SpaceMono_400Regular';
    font-size: 14px;
    line-height: 20px;
  `,
  'body-2-medium': css`
    font-family: 'SpaceMono_700Bold';
    font-size: 14px;
    line-height: 20px;
  `,
  caption: css`
    font-family: 'SpaceMono_400Regular';
    font-size: 12px;
    line-height: 16px;
  `,
  label: css`
    font-family: 'SpaceMono_700Bold';
    font-size: 12px;
    line-height: 16px;
  `,
  overline: css`
    font-family: 'SpaceMono_400Regular';
    font-size: 11px;
    line-height: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
  `,
};
