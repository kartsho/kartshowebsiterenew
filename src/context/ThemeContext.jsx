import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

const ThemeContext = createContext(null);

const THEME_STORAGE_KEY = "kartsho-theme";

const getPreferredTheme = () => {
  if (typeof document !== "undefined") {
    const currentTheme = document.documentElement.dataset.theme;

    if (currentTheme === "dark" || currentTheme === "light") {
      return currentTheme;
    }
  }

  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  const prefersDark =
    window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;

  return prefersDark ? "dark" : "light";
};

const applyThemeToDocument = (theme) => {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  const isDark = theme === "dark";

  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  root.style.backgroundColor = isDark ? "#070b14" : "#f5f7fb";
  root.style.setProperty("--page-bg", isDark ? "#070b14" : "#f5f7fb");
  root.style.setProperty("--text-primary", isDark ? "#f8fafc" : "#0b0f19");
  root.style.setProperty("--text-secondary", isDark ? "#cbd5e1" : "#4b5563");
  root.style.setProperty("--text-muted", isDark ? "#94a3b8" : "#6b7280");
  root.style.setProperty("--surface-strong", isDark ? "#0f172a" : "#ffffff");
  root.style.setProperty(
    "--surface",
    isDark ? "rgba(15, 23, 42, 0.82)" : "rgba(255, 255, 255, 0.78)"
  );
  root.style.setProperty(
    "--surface-soft",
    isDark ? "rgba(15, 23, 42, 0.62)" : "rgba(255, 255, 255, 0.6)"
  );
  root.style.setProperty(
    "--border",
    isDark ? "rgba(148, 163, 184, 0.18)" : "rgba(15, 23, 42, 0.1)"
  );

  if (document.body) {
    document.body.style.backgroundColor = isDark
      ? "#070b14"
      : "#f5f7fb";
    document.body.style.color = isDark ? "#f8fafc" : "#0b0f19";
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getPreferredTheme);

  useLayoutEffect(() => {
    applyThemeToDocument(theme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (error) {
      // Ignore storage write failures and keep the UI responsive.
    }
  }, [theme]);

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key !== THEME_STORAGE_KEY) {
        return;
      }

      if (event.newValue === "dark" || event.newValue === "light") {
        setTheme(event.newValue);
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === "dark",
      setTheme,
      toggleTheme: () =>
        setTheme((currentTheme) =>
          currentTheme === "dark" ? "light" : "dark"
        ),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};
