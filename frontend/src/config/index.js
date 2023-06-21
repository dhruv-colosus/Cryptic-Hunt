export const BACKEND_URL = "http://localhost:3001";
export const LOCAL_STORAGE_KEY = "cryptic-hunt/";

export const getLocalStorageKey = (key) => {
  return `${LOCAL_STORAGE_KEY}${key}`;
};
