import { ChangeEvent, useEffect, useState } from 'react';

import '@/components/commons/ImageUploader/ImageUploader.css';

/* Components */
import { Avatar } from '@/components/commons/Avatar';

/* Types */
import { IData } from '@/types/IDatas';
interface IImageUploader<T> {
  dataItem: T;
  onAvatarChange: (data: string) => void;
}

/* Helpers */
import { convertBase64String } from '@/helpers/convertBase64String';

export const ImageUploader = ({
  dataItem,
  onAvatarChange
}: IImageUploader<IData>) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  /* Get File's resource and convert to base64 string and
  update selectedImage to re-render when clicked button Save */
  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const data = await convertBase64String(file);
    if (data) {
      setSelectedImage(data as string);
      onAvatarChange(data as string);
    }
  };

  /* Re-render image-uploader when dataItem passed as prop is changed */
  useEffect(() => {
    setSelectedImage(dataItem.avatar);
  }, [dataItem]);

  return (
    <div className="image-uploader">
      <p className="label-edit-input label-image-uploader">Avatar</p>

      <Avatar
        src={
          selectedImage != null
          ? selectedImage
          : dataItem.avatar
        }
        alt={dataItem.fullName}
        bgColor={dataItem.bgColor}
        variant="square"
        additionalClass="avatar-edit-information"
      />

      <div className="button-upload-wrapper">
        <label htmlFor="button-upload-image">
          <span className="button-upload-icon"></span>
          Upload new Photo
        </label>

        <input
          className="input-upload-image"
          type="file"
          accept="image/*"
          id="button-upload-image"
          name={dataItem.fullName}
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};
