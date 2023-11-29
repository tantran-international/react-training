import { useState } from 'react';
import '@/components/parts/Tab/ModifyInfoDetails/ModifyInforDetails.css';

/* Components */
import { Button } from '@/components/commons/Button';
import { TextField } from '@/components/commons/TextField';
import { ImageUploader } from '@/components/commons/ImageUploader';
import { Switch } from '@/components/commons/Switch';
import { Status } from '@/components/commons/Status';

/* Types */
import { IData } from '@/types/IData';

interface IModyfiInfoDetails<T> {
  activeTab: string;
  item: T;
}

/* Helpers */
import { renderDate } from '@/helpers/renderDate';
import { TextArea } from '@/components/commons/TextArea';

export const ModifyInfoDetail = ({
  activeTab,
  item
}: IModyfiInfoDetails<IData>) => {
  const [fullName, setFullname] = useState(item.fullName);
  const [email, setEmail] = useState(item.email);
  const [status, setStatus] = useState(item.isActive);
  const [details, setDetails] = useState(item.details)

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

  switch (activeTab) {
    case "General":
      return (
        <>
          <div className="tab-toolbar">
            <Button
              additionalClass="button-secondary"
              content="Delete"
            />
            <Button
              additionalClass="button-primary button-primary-edit"
              content="Save"
            />
          </div>

          <form className="form-edit-user">
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

            <ImageUploader item={item} />

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
                item.registered == null || ""
                  ? "Unknown"
                  : renderDate(item.registered)
              }</p>
            </div>

            <div className="form-edit-item form-edit-item-date">
              <span className="form-edit-label">Last visited</span>
              <p className="form-edit-content">{
                item.lastVisitedDate == null || ""
                  ? "Unknown"
                  : renderDate(item.lastVisitedDate)
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
