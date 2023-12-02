import { useEffect, useState } from 'react';

import '@/components/parts/Tab/ModifyInfoDetails/ModifyInforDetails.css';

/* Components */
import { Button } from '@/components/commons/Button';
import { TextField } from '@/components/commons/TextField';
import { ImageUploader } from '@/components/commons/ImageUploader';
import { Switch } from '@/components/commons/Switch';
import { Status } from '@/components/commons/Status';

/* Types */
import { IData } from '@/types/IDatas';
interface IModyfiInfoDetails<T> {
  activeTab: string;
  dataItem: T;
}

/* Helpers */
import { renderDate } from '@/helpers/renderDate';
import { TextArea } from '@/components/commons/TextArea';

export const ModifyInfoDetails = ({
  activeTab,
  dataItem
}: IModyfiInfoDetails<IData>) => {
  const [fullName, setFullname] = useState(dataItem.fullName);
  const [email, setEmail] = useState(dataItem.email);
  const [status, setStatus] = useState(dataItem.isActive);
  const [details, setDetails] = useState(dataItem.details)

  const handleFullNameChange = (value: string) => {
    setFullname(value);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handleSwitchChange = () => {
    setStatus(!status);
  };

  const handleDetailsChange = (value: string) => {
    setDetails(value);
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('huhu');
  }

  /* Update the initial value of TextField && TextArea && Switch && Status components
  when the dataItem prop has changed */
  useEffect(() => {
    setFullname(dataItem.fullName);
    setEmail(dataItem.email);
    setStatus(dataItem.isActive);
    setDetails(dataItem.details);
  }, [dataItem])

  switch (activeTab) {
    case "General":
      return (
        <>
          <div className="tab-toolbar">
            <Button
              type='button'
              additionalClass="button-secondary"
              content="Delete"
            />
            <Button
              type="submit"
              form="form-edit-user"
              additionalClass="button-primary button-primary-edit"
              content="Save"
            />
          </div>

          <form id="form-edit-user"
            className="form-edit-user"
            onSubmit={handleFormSubmit}
          >
            <div className="form-edit-item">
              <TextField
                label="Full Name"
                id="edit-name"
                name="edit-name"
                value={fullName}
                onInputChange={handleFullNameChange}
                additionalClass="text-field-edit"
              />
            </div>

            <div className="form-edit-item">
              <TextField
                label="Email"
                id="edit-email"
                name="edit-email"
                value={email}
                onInputChange={handleEmailChange}
                additionalClass="text-field-edit"
              />
            </div>

            <ImageUploader dataItem={dataItem} />

            <div className="form-edit-item-status">
              <span className="form-edit-label">Status</span>
              <Switch
                onChange={handleSwitchChange}
                checked={status}
                additionalClass="form-edit-switch"
              />
              <div className="status-wrapper">
                <Status isActive={status} />
              </div>
            </div>

            <div className="form-edit-item form-edit-item-date">
              <span className="form-edit-label">Resistered</span>
              <p className="form-edit-content">{
                dataItem.registeredDate == null
                  ? "Unknown"
                  : renderDate(dataItem.registeredDate)
              }</p>
            </div>

            <div className="form-edit-item form-edit-item-date">
              <span className="form-edit-label">Last visited</span>
              <p className="form-edit-content">{
                dataItem.lastVisitedDate == null
                  ? "Unknown"
                  : renderDate(dataItem.lastVisitedDate)
              }</p>
            </div>

            <div className="form-edit-item form-edit-item-details">
              <span className="form-edit-label">Details</span>
              <TextArea
                onDetailsChange={handleDetailsChange}
                value={details}
              />
            </div>
          </form>
        </>
      );
  }
};
