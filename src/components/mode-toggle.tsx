"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { forwardRef } from "react";

export const ModeToggle = forwardRef<HTMLButtonElement>((props, ref) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      ref={ref}
      variant="ghost"
      type="button"
      size="icon"
      className="size-8 px-0 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <SunIcon className="h-[1.1rem] w-[1.1rem] dark:hidden" />
      <MoonIcon className="hidden h-[1.1rem] w-[1.1rem] dark:block" />
    </Button>
  );
});

ModeToggle.displayName = "ModeToggle";
