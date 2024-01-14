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
    active
} : ItemProps) => {
    return (
        <div
            role="button"
            className={cn(
                "group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-[#5D8E52] hover:text-[#F0F0F0] flex items-center text-muted-foreground font-medium rounded-lg",
                active && "bg-[#5D8E52] text-primary" 
            )}
        >
            <Icon 
                className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground"
            />
            <span className="truncate">{label}</span>
        </div>
    )
}