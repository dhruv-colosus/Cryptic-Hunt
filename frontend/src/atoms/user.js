import { getLocalStorageKey } from "@/config";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const userTokenAtom = atomWithStorage(
  getLocalStorageKey("userToken"),
  null
);

export const logInUserAtom = atom(null, (get, set, token) => {
  set(userTokenAtom, token);
});

export const logOutUserAtom = atom(null, (get, set) => {
  set(userTokenAtom, null);
});
