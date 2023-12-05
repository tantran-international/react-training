/* Converts local image resource to base64 string synchronously */
export const convertBase64String = (file?: File) => {
  return new Promise((resolve) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file!);

    fileReader.onloadend = (event) => {
      const avatarUrl = event.target?.result;
      if (avatarUrl) {
        resolve(avatarUrl.toString());
      }
    };
  });
};


/**
 * Convert lowercase name to capitalize first letter name
 * @param data - type name of listItem
 * @returns - type name with capitalize first letter
 */
export const toCapitalizeFirstLetter = (type: string): string => {
  return type.charAt(0).toUpperCase() + type.slice(1);
};
