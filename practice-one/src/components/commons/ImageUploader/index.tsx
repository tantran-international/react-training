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

export const ImageUploader = ({
  dataItem,
  onAvatarChange
}: IImageUploader<IData>) => {
  const [selectedImage, setSelectedImage] = useState<string | null>();

  /***
   * Get local image as "object" and assign to state selectedImage
   */
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const fileReader = new FileReader();
    if (file != null) {
      fileReader.readAsDataURL(file);
    }
    fileReader.onloadend = (event) => {
      const avatarUrl = event.target?.result;
      if (avatarUrl) {
        setSelectedImage(avatarUrl.toString());
        onAvatarChange(avatarUrl.toString());
      }
    };
  };

  /* Re-render image-uploader when dataItem is updated */
  useEffect(() => {
    setSelectedImage(dataItem.avatar);
  }, [dataItem]);

  return (
    <div className='image-uploader'>
      <p className='label-edit-input label-image-uploader'>Avatar</p>

      <Avatar
        src={selectedImage != null ? selectedImage : dataItem.avatar}
        alt={dataItem.fullName}
        bgColor={dataItem.bgColor}
        variant='square'
        additionalClass='avatar-edit-information'
      />

      <div className='button-upload-wrapper'>
        <label htmlFor='button-upload-image'>
          <span className='button-upload-icon'></span>
          Upload new Photo
        </label>

        <input
          className='input-upload-image'
          type='file'
          accept='image/*'
          id='button-upload-image'
          name={dataItem.fullName}
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};
