export const toCapitalizeFirstLetter = (data: string) => {
  let capitalizedWord;
  return (capitalizedWord = data.charAt(0).toUpperCase() + data.slice(1));
};
