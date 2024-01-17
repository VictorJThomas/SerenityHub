"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ItemProps {
  label: string;
  onClick?: () => void;
  icon: LucideIcon;
  url?: string;
  active?: boolean;
}

export const Item = ({
  label,
  onClick,
  icon: Icon,
  url,
  active,
}: ItemProps) => {
  return (
    <div
      role="button"
      className={cn(
        "group min-h-[27px] text-base px-4 py-2 w-full group/item  hover:text-[#F0F0F0] flex items-center text-muted-foreground font-medium ",
        active && "bg-[#5D8E52] text-primary "
      )}
    >
      <Icon className="shrink-0 h-[40px] w-[40px] mx-2 p-2 group-hover/item:bg-[#5D8E52] group-hover/item:text-[#F0F0F0] text-muted-foreground rounded-lg" />
      <span className="truncate group-hover/item:bg-[#5D8E52] rounded-lg p-2 w-full">{label}</span>
    </div>
  );
};