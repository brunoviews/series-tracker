import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const TitlesContainer = styled(SafeAreaView).attrs({
  edges: ['top'],
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  padding-horizontal: ${({ theme }) => theme.spacing.md}px;
  gap: 12px;
`;
