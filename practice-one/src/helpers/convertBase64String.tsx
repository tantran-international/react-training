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
