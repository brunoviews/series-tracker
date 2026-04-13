import Text from '@components/Text';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Message = styled(Text)<{
  $isSuccess?: boolean;
  $isError?: boolean;
  $isRemoving?: boolean;
}>`
  color: ${({ theme, $isSuccess, $isError, $isRemoving }) => {
    if ($isSuccess) return theme.colors.textIcon.primary.main;
    if ($isError) return theme.colors.textIcon.semantic.error.main;
    if ($isRemoving) return theme.colors.textIcon.semantic.error.main;

    return theme.colors.textIcon.default.main;
  }};
  text-transform: uppercase;
`;
