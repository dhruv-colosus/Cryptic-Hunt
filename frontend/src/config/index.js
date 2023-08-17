export const BACKEND_URL = "https://xerocrypt.devcomm.international";
export const LOCAL_STORAGE_KEY = "cryptic-hunt/";

export const getLocalStorageKey = (key) => {
  return `${LOCAL_STORAGE_KEY}${key}`;
};
