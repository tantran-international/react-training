import { IUsers } from '@/types/IUsers';

/**
 * Filter users and return a new array containing users whose fullname matches the keyword
 * @param users - array of users in database
 * @param keyword - value of searchbar's text-field
 */
export const filterUserName = (
  users: IUsers[],
  keyword: string
) => {
  return users.filter((user) => {
    user.fullName.toLowerCase().includes(keyword.toLocaleLowerCase());
  });
};
