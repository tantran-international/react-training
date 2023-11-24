import '@/components/parts/CardInformation/CardInformation.css';

/* Component */
import { Status } from '@/components/commons/Status';
import { Avatar } from '@/components/commons/Avatar';
import { Button } from '@/components/commons/Button';

/* Icons */
import iconEdit from '@/assets/images/icons/icon-pen.svg';

/* Types */
interface IUserInformation {
  additionalClass?: string;
  content: string;
  status: boolean;
  avatar?: string;
  name: string;
  bgColor: string;
  email?: string;
  lastVisitedDate: string;
}

export const CardInformation = ({
  additionalClass,
  content,
  status,
  avatar,
  name,
  bgColor,
  email,
  lastVisitedDate
}: IUserInformation) => {
  /**
   *
   * @returns - string format of lastvisitedDate for render
   */
  const renderLastVisitedDate = () => {
    /* Convert and get needed value of Date + Time from data */
    const dataDate = new Date(lastVisitedDate);
    const month = dataDate.toLocaleString('default', { month: 'short' });
    const day = ('0' + (dataDate.getDay() + 1)).slice(-2);
    const year = dataDate.getFullYear();
    const hour = ('0' + (dataDate.getHours() + 1)).slice(-2);
    const minute = ('0' + (dataDate.getMinutes() + 1)).slice(-2);
    const second = ('0' + (dataDate.getSeconds() + 1)).slice(-2);

    return `${month} ${day}, ${year} ${hour}:${minute}:${second}`;
  };

  return (
    <article className={`card-information ${additionalClass}`}>
      <header className='info-header'>
        <div>
          <h2 className='infor-heading'>{content}</h2>
          <Status additionalClass='info-status' isActive={status} />
        </div>
        <Button icon={iconEdit} />
      </header>

      <div className='info-media-content'>
        <Avatar
          additionalClass='avatar-information'
          src={avatar}
          alt={name}
          bgColor={bgColor}
          variant='square'
        />
        <p className='info-name'>{name}</p>
      </div>

      <div className='infolist-content'>
        <div className='infolist-header'>
          <span className='infolist-email'></span> Email:
        </div>
        <p className='infolist-detail'>{email}</p>

        <div className='infolist-header'>
          <span className='infolist-date'></span> Last visited:
        </div>
        <p className='infolist-detail'>{renderLastVisitedDate()}</p>
      </div>
    </article>
  );
};
