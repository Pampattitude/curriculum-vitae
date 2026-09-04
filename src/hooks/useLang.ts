import { createContext } from "preact/compat";
import { useState } from "preact/hooks";

const LANG_AVAILABLE = ["en", "fr"] as const;
export type Lang = (typeof LANG_AVAILABLE)[number];
const LANG_DEFAULT = "en" as const;

export type LangContextType = {
  lang: "light" | "dark";
  setLang: (_: Lang) => void;
};
export const LangContext = createContext<LangContextType>({
  lang: LANG_DEFAULT,
  setLang: (_: Lang) => {},
});

export const getInitialLang = (): Lang => {
  if (typeof window === "undefined") {
    return LANG_DEFAULT;
  }

  const hasLocalStorage =
    "localStorage" in window && window.localStorage != null;
  if (hasLocalStorage) {
    const storedLang = window.localStorage.getItem("lang") as
      | Lang;
    if (LANG_AVAILABLE.includes(storedLang)) {
      return storedLang;
    }
  }

  const navigatorLang = navigator.language?.toLowerCase();
  if (!navigatorLang) {
    return LANG_DEFAULT;
  }

  if (navigatorLang == "en" || navigatorLang.startsWith("en-")) {
    return "en";
  } else if (navigatorLang == "fr" || navigatorLang.startsWith("fr-")) {
    return "fr";
  }

  return LANG_DEFAULT;
};

export const useLang = () => {
  const [lang, setLang] = useState<Lang>(getInitialLang());
  return [lang, setLang];
};
