"use client";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebar-store";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { ToggleTheme } from "../toggle-theme";
import { Button } from "../ui/button";

export function Sidebar() {
  const show = useSidebarStore((state) => state.show);

  return (
    <div
      className={cn(
        show ? `min-w-72` : `w-16`,
        `relative h-screen flex flex-col items-center gap-2 dark:from-dark from-white border-r dark:border-white border-black shadow-md shadow-black dark:shadow-white`
      )}
    >
      <ToggleTheme />
      <SidebarToggleButton />
    </div>
  );
}

export function SidebarToggleButton() {
  const show = useSidebarStore((state) => state.show);
  const toggleShow = useSidebarStore((state) => state.toggleShow);

  return (
    <div className="absolute flex -right-8 p-2">
      <Button variant={"outline"} className="rounded-full" onClick={toggleShow}>
        {show ? (
          <DoubleArrowLeftIcon className="w-3 h-3" />
        ) : (
          <DoubleArrowRightIcon className="w-3 h-3" />
        )}
      </Button>
    </div>
  );
}
