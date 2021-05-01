export const getSessionStorage = (str: string) => {
  const storage = sessionStorage.getItem(str);
  return storage && JSON.parse(storage);
};
export const setSessionStorage = (str: string, data: unknown) => {
  sessionStorage.setItem(str, JSON.stringify(data));
};
