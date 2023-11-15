export interface IUser {
  key: string;
  name: string;
  email?: string;
  avatar?: string;
  isActive: boolean;
  createDate?: string;
  lastVisitedDate?: string;
  details?: string;
}
