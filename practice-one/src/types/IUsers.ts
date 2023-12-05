export interface IUsers {
  id: string;
  avatar: string | null;
  fullName: string;
  email: string;
  isActive: boolean;
  registeredDate: string | null;
  lastVisitedDate: string | null;
  details?: string;
  bgColor: string;
}
