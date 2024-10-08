"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = (newTheme: string) =>
    setTheme(newTheme === "dark" ? "light" : "dark");

  const handleTheme = () => {
    if (theme === "system" || theme === undefined) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      toggleTheme(systemTheme);
    } else if (theme) toggleTheme(theme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-9"
      onClick={handleTheme}
    >
      <Sun className="h-[1.5rem] w-[1.5rem] stroke-[1.5] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.5rem] w-[1.5rem] stroke-[1.5] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
