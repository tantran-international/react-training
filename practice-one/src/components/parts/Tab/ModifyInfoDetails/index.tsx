import { useState } from 'react';

/* Components */
import { Button } from '@/components/commons/Button';
import { TextField } from '@/components/commons/TextField';
import { ImageUploader } from '@/components/commons/ImageUploader';

/* Types */
import { IData } from '@/types/IData';

interface IModyfiInfoDetails<T> {
  activeTab: string;
  item: T;
}

export const ModifyInfoDetail = ({
  activeTab,
  item
}: IModyfiInfoDetails<IData>) => {
  const [fullName, setFullname] = useState(item.fullName);
  const [email, setEmail] = useState(item.email);

  /* Helpers */
  const handleFullNameChange = (value: string) => {
    setFullname(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  switch (activeTab) {
    case 'General':
      return (
        <>
          <div className='tab-toolbar'>
            <Button
              additionalClass='button-secondary'
              content='Delete'
            />
            <Button
              additionalClass='button-primary'
              content='Save'
            />
          </div>

          <form className='form-edit-user'>
            <div>
              <TextField
                label='Full Name'
                id='edit-name'
                name='edit-name'
                value={fullName}
                onInputChange={handleFullNameChange}
                additionalClass='text-field-edit'
              />
            </div>

            <div>
              <TextField
                label='Email'
                id='edit-email'
                name='edit-email'
                value={email}
                onInputChange={handleEmailChange}
                additionalClass='text-field-edit'
              />
            </div>

            <div>
              <ImageUploader item={item} />
            </div>
          </form>
        </>
      );
  }
};
