import { IUser } from "./IUser";

export type TAvatar = {
  additionalClass: 'row' | 'information' | 'edit-information';
  user: IUser;
  variant: 'rounded' | 'square';
}
