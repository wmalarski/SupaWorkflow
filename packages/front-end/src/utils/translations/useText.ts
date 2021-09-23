import { useCallback } from "react";
import translations, { Translation } from "./translations";

export type UseTextFnc = <TKey extends keyof Translation>(
  key: TKey
) => Translation[TKey];

const useText = (): UseTextFnc => {
  const current = translations.default;
  return useCallback(
    <TKey extends keyof Translation>(key: TKey) => current[key],
    [current]
  );
};

export default useText;
