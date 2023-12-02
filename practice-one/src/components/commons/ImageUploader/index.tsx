import { ChangeEvent, useState } from 'react';

import '@/components/commons/ImageUploader/ImageUploader.css';

/* Components */
import { Avatar } from '@/components/commons/Avatar';

/* Types */
import { IData } from '@/types/IDatas';
interface IImageUploader<T> {
  dataItem: T;
}

export const ImageUploader = ({ dataItem }: IImageUploader<IData>) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  /***
   * Get local image as "object" and assign to state selectedImage
   */
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedImage(file);
  };

  return (
    <div className="image-uploader">
      <p className="label-text-field-edit">Avatar</p>

      <Avatar
        src={
          selectedImage
          ? URL.createObjectURL(selectedImage)
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
