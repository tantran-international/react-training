export interface IData {
  id: string;
  avatar?: string | null;
  fullName: string;
  email: string;
  isActive: boolean;
  registeredDate?: string;
  lastVisitedDate: string;
  details?: string;
  bgColor?: string;
}
