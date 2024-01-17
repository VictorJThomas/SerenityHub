"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { Link, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const router = useRouter()

  const explore = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.push("/scenario")
  }

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Immerse Yourself in Tranquility with{" "}
        <span className="underline decoration-black text-[#88B57D]">
          Serenity Hub
        </span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Serenity Hub is the space where you can find calmness and focus. <br />
        Explore beautiful landscapes, set focused work sessions, and experience
        relaxation like never before.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button onClick={explore}>
          Start Exploring
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Join Serenity Hub
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
