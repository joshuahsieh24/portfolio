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
      className="px-2 hover:bg-skyteal/20 hover:text-skyteal transition-colors duration-200"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-muted-foreground dark:hidden" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-muted-foreground dark:block" />
    </Button>
  );
});

ModeToggle.displayName = "ModeToggle";
