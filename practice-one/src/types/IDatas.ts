export interface IData {
  id: string;
  avatar?: string | null;
  fullName: string;
  email: string | null;
  isActive: boolean;
  registeredDate: string | null;
  lastVisitedDate: string | null;
  details?: string;
  bgColor: string;
}
