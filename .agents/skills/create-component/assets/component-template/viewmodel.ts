import type { ExampleProps } from './types';

export const useViewModel = ({ id }: ExampleProps) => {
  const handlePress = () => {
    // handler logic here
  };

  return { handlePress };
};
