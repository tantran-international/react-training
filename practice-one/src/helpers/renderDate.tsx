/**
   * Get lastVisitedDate from data and render with customize format
   * @returns - string format of lastvisitedDate for render
   */
export const renderDate = (data: string) => {
  /* Convert and get needed value of Date + Time from data */
  const dateData = new Date(data);
  const month = dateData.toLocaleString('default', { month: 'short' });
  const day = ('0' + dateData.getDate()).slice(-2);
  const year = dateData.getFullYear();
  const hour = ('0' + dateData.getHours()).slice(-2);
  const minute = ('0' + dateData.getMinutes()).slice(-2);
  const second = ('0' + dateData.getSeconds()).slice(-2);

  return `${month} ${day}, ${year} ${hour}:${minute}:${second}`;
};
