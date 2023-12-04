/**
 * Convert lowercase name to capitalize first letter name
 * @param data - type name of listItem
 * @returns - type name with capitalize first letter
 */
export const toCapitalizeFirstLetter = (type: string): string => {
  return type.charAt(0).toUpperCase() + type.slice(1);
};
