import { createContext, useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider} from "@mui/material";

export const ThemeContext = createContext();

export const ThemeProviders = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const save_theme = localStorage.getItem("theme");
    return save_theme ? save_theme : "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const todo_theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
          primary: {
            main: theme === "light" ? "#000" : "#fff",
          },
          secondary: {
            main: theme === "light" ? "#000" : "#fff",
          },
        },
        components: {
          MuiMenu: {
            styleOverrides: {
              paper: {
                "& .MuiMenuItem-root": {
                  backgroundColor: theme === "light" ? "#fff" : "#000",
                  color: theme === "light" ? "#000" : "#fff",
                },
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                color: theme === "light" ? "#fff" : "#fff",
              },
            },
          },
        },
      }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={todo_theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
