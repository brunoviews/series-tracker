import { variantStyles } from './styles';
import type { TextVariant } from '@theme/types';
import styled from 'styled-components/native';

type Props = {
  variant?: TextVariant;
  color?: string;
};

// Componente base de texto. Recibe variant y resuelve los estilos tipográficos.
// Color por defecto: textIcon.default.main del tema.
//
// Uso directo:
//   <Text variant="title-1">Hola</Text>
//
// Uso con alias (patrón de la empresa):
//   export const Title = styled(Text).attrs({ variant: 'title-1' })``
//   export const Caption = styled(Text).attrs({ variant: 'caption' })`
//     color: ${({ theme }) => theme.colors.textIcon.default.weak};
//   `
const Text = styled.Text<Props>`
  ${({ variant = 'body-2-regular' }) => variantStyles[variant]}
  color: ${({ theme, color }) => color ?? theme.colors.textIcon.default.main};
`;

export default Text;
