import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// Color Design Tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#434957",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
      }
    : {
        primary: {
          100: "#080b12",
          200: "#0c101b",
          300: "#101624",
          400: "#141b2d",
          500: "#434957",
          600: "#040509",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
      })
});

// MUI Theme Settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      primary: {
        main: colors.primary[500],
      },
      background: {
        default: mode === "dark" ? colors.primary[500] : "#fcfcfc",
      },
    },
  };
};

// Color Mode Context
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

// Custom Hook to Manage Theme Mode
export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
