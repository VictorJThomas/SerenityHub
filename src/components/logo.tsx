import { Leaf } from "lucide-react";
import Image from "next/image";

interface LogoProps {
    src: string;
}

export const Logo = () => {
    return (
        <div className="p-2 flex items-center justify-center font-semibold gap-2">
            <Leaf className="h-10 w-10 text-[#5D8E52]"/>
            <p className="text-muted-foreground text-xl">Serenity <span className="font-bold">Hub</span></p>
        </div>
    )
}