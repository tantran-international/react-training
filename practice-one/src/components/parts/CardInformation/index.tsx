import '@/components/parts/CardInformation/CardInformation.css';

/* Component */
import { Status } from '@/components/commons/Status';
import { Avatar } from '@/components/commons/Avatar';
import { Button } from '@/components/commons/Button';

/* Icons */
import iconEdit from '@/assets/images/icons/icon-pen.svg';

/* Types */
interface ICardInformation {
  additionalClass?: string;
  content: string;
  status: boolean;
  avatar?: string;
  name: string;
  bgColor: string;
  email?: string;
  lastVisitedDate: string;
}

/* Helpers */
import { renderDate } from '@/helpers/renderDate';

export const CardInformation = ({
  additionalClass,
  content,
  status,
  avatar,
  name,
  bgColor,
  email,
  lastVisitedDate
}: ICardInformation) => {

  return (
    <article className={`card-information ${additionalClass}`}>
      <header className="info-header">
        <div>
          <h2 className="infor-heading">{content}</h2>
          <Status
            additionalClass="info-status"
            isActive={status}
          />
        </div>
        <Button icon={iconEdit} />
      </header>

      <div className="info-media-content">
        <Avatar
          additionalClass="avatar-information"
          src={avatar}
          alt={name}
          bgColor={bgColor}
          variant="square"
        />
        <p className="info-name">{name}</p>
      </div>

      <div className="infolist-content">
        <div className="infolist-header">
          <span className="infolist-icon infolist-email"></span> Email:
        </div>
        <p className="infolist-detail">{email}</p>

        <div className="infolist-header">
          <span className="infolist-icon infolist-date"></span> Last visited:
        </div>
        <p className="infolist-detail">{
            lastVisitedDate == null || ''
              ? 'Unknown'
              : renderDate(lastVisitedDate)
            }
          </p>
      </div>
    </article>
  );
};
