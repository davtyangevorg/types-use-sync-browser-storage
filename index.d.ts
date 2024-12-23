import { Dispatch, SetStateAction } from "react";

export function useSyncWithLocalStorage<T>(options: {
  storageKey: string;
  initialState: T;
}): [T, Dispatch<SetStateAction<T>>];

export function useSyncWithSessionStorage<T>(options: {
  storageKey: string;
  initialState: T;
}): [T, Dispatch<SetStateAction<T>>];
    