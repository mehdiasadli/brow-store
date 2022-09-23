export const setLocal = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocal = (key: string, defaultValue: any = null): any => {
  const result = localStorage.getItem(key);
  if (!result) return defaultValue;
  return JSON.parse(result);
};
