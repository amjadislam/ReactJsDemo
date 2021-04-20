export default (item: any) => {
  let response = null;
  const storedItem = localStorage.getItem(item);
  if (storedItem) {
    try {
      response = JSON.parse(storedItem);
      return response;
    } catch (err) {
      localStorage.removeItem(item);
      return null;
    }
  }
  return null;
};
