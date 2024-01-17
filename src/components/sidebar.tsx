"use client";

import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  Home,
  Info,
  MenuIcon,
  MessageSquareHeart,
  UserRound,
  X,
} from "lucide-react";
import { Item } from "./item";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

export const Sidebar = () => {
  const navItems = [
    {
      name: "Home",
      icon: Home,
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

  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    if (isMobile) {
      resetWidth()
    } else {
      collapse();
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [pathname, isMobile]);


  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      // sidebarRef.current.style.position = "absolute";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "100%" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full overflow-y-auto fixed flex w-60 flex-col z-[99999] bg-primary",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0",
        )}
      >
        <div className="py-4 px-4">
          <div className="flex gap-1">
            <Logo />
            <X onClick={collapse} className="h-6 w-6 text-muted-foreground mt-2 hover:text-[#F0F0F0] hover:transition-all hover:ease-in-out duration-300" />
            {/* <Button  variant="ghost">
            </Button> */}
          </div>
          <div className="opacity-100 w-full h-[2px] bg-primary/10 rounded-lg" />
        </div>
        <nav>
          {navItems.map((item, index) => (
            <div key={index} className="px-2">
              <Item label={item.name} icon={item.icon} />
            </div>
          ))}
        </nav>

        <div
          ref={navbarRef}
          className={cn(
            "opacity-0 group-hover/sidebar:opacity-100 transition h-full w-1 bg-primary/10 right-0 top-0",
            isResetting && "transition-all easi-in-out duration-300",
            isMobile && "left-0 w-full"
          )}
        />
      </aside>
      {isCollapsed && (
        <nav className="bg-transparent px-3 py-2 fixed h-auto">
          <MenuIcon
            onClick={resetWidth}
            role="button"
            className="h-6 w-6 text-muted-foreground hover:text-[#0F0F0F] hover:transition-all hover:ease-in-out duration-300"
          />
        </nav>
      )}
    </>
  );
};
