/**
  * Generate random colors
  * @return string - random Hexadecimal Color
  */
export const generateRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
