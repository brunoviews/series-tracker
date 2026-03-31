import Text from '@components/Text';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  overflow: hidden;
`;

export const CardContainer = styled.ImageBackground`
  flex-direction: row;
  padding: 16px;
  margin-bottom: 4px;
  width: 155px;
  height: 200px;
`;

export const ResultTitle = styled(Text).attrs({
  variant: 'caption',
  numberOfLines: 1,
})`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textIcon.default.strong};
`;

export const ResultYear = styled(Text).attrs({ variant: 'label' })`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textIcon.default.weak};
  text-align: left;
`;

export const ResultRating = styled(Text).attrs({ variant: 'label' })`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textIcon.default.weak};
`;

export const RatingYearContainer = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 2px;
`;
