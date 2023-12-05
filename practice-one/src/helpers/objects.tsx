import { IUsers } from '@/types/IUsers';

/**
 * Get value and it's type if there are exactly ( key: string ) in "obj" as key.
 * @param obj - object as parameter
 * @param key - keys in object
 * @returns - value of key
 */
export const getObjectValue = <T, Key extends keyof T>(
  obj: T,
  key: Key
): T[Key] => {
  return obj[key];
};

/**
 *
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
