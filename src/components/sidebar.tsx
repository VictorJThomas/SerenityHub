"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, Home, Info, MessageSquareHeart, UserRound } from "lucide-react";
import { Item } from "./item";
import { useParams, usePathname, useRouter } from "next/navigation";
import {useMediaQuery} from "@uidotdev/usehooks"
import { ElementRef, useEffect, useRef, useState } from "react";

export const Sidebar = () => {
  const navItems = [
    {
      name: "Home",
      icon: Home ,
      url: "/",
    },
    {
      name: "Profile",
      icon: UserRound,
      url: "/profile",
    },
    {
      name: "About",
      icon: Info,
      url: "/about",
    },
    {
      name: "Feedback",
      icon: MessageSquareHeart,
      url: "/feedback",
    },
  ];

  const router = useRouter()
  const params = useParams()
  const pathname = usePathname()
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isResizingRef = useRef(false)
  const sidebarRef = useRef<ElementRef<"aside">>(null)
  const navbarRef = useRef<ElementRef<"div">>(null)
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "p-6 group/sidebar h-full overflow-y-auto relative flex w-60 flex-col z-[99999]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "hidden",
          !isOpen && "translate-x-full"
        )}
      >
        <div
          role="button"
          onClick={toggleSidebar}
          className={cn(
            "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100"
          )}
        >
          <ChevronLeft className="h-6 w-6"/>
        </div>
        {navItems.map((item, index) => (
          <div key={index}>
            <Item 
                label={item.name}
                icon={item.icon}
            />
          </div>
        ))}
        <div 
          className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
        />
      </aside>
    </>
  );
};