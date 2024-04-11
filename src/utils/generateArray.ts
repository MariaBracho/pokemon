export const generateArray = (numbers: number): number[] => {
  return Array.from({ length: numbers }, (_, i) => i);
};
