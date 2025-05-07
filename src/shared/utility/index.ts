export const stringToDate = (enteredDate: any) => {
  const inputDate = enteredDate;
  const year = inputDate.substring(0, 4);
  const month = inputDate.substring(5, 7);
  const day = inputDate.substring(8, 10);

  const date = new Date(`${month}/${day}/${year}`);
  const eventDate =
    (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
    "/" +
    (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
    "/" +
    date.getFullYear();

  return eventDate;
};
