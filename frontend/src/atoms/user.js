import { getLocalStorageKey } from "@/config";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const userAtom = atomWithStorage(getLocalStorageKey("user"), null);

export const logInUserAtom = atom(null, (get, set, user) => {
  set(userAtom, user);
});

export const logOutUserAtom = atom(null, (get, set) => {
  set(userAtom, user);
});
