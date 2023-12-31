"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { createTheme, NextUIProvider, theme } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",

  theme: {
    colors: {
      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
    },
  },
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider >{children}</NextUIProvider>
      </NextThemesProvider>
    </SessionProvider>
  );
};

export default Providers;
