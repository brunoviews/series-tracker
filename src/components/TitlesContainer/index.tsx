import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const TitlesContainer = styled(SafeAreaView).attrs({
  edges: ['top'],
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  padding: 16px ${({ theme }) => theme.spacing.md}px;
  gap: 8px;
`;
