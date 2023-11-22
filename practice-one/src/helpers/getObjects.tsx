/**
 * Get value and it's type if there are exactly ( key: string ) in "obj" as key.
 * @param obj : object as parameter
 * @param key : keys in object
 * @returns : value of key
 */
export const getObjectValue = <T, Key extends keyof T>(
  obj: T,
  key: Key
): T[Key] => {
  return obj[key];
};
