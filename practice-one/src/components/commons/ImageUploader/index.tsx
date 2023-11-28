import { ChangeEvent, useState } from 'react';
import '@/components/commons/ImageUploader/ImageUploader.css';

export const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  /***
   * Get local image as "object" and assign to state selectedImage
   */
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedImage(file);
  };

  return (
    <div>
      <input
        type='file'
        accept='image/*'
        onChange={(event) => {
          handleImageChange(event);
        }}
      />

      {selectedImage && (
        <div>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt='example: Full Name of User' />
        </div>
      )}
    </div>
  );
};
