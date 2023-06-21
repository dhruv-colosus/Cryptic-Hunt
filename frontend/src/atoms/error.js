import { atom } from "jotai";

export const errorAtom = atom(null);

export const closeErrorAtom = atom(null, (get, set) => {
  set(errorAtom, null);
});
