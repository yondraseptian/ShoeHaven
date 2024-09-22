import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import React from "react";
import UserNav from "./UserNav";
import Navigation from "./Navigation";

const MobileNav = () => {
  return (
    <div className="menu-nav">
      <Sheet>
        <SheetTrigger>
            <Image src={"/icons/menu.svg"} width={24} height={24} alt={"menu"}/>
        </SheetTrigger>
        <SheetContent className="mobile-nav">
          <SheetHeader>
            <UserNav className="md:hidden flex gap-2"/>
          </SheetHeader>
            <Navigation className="md:hidden flex flex-col gap-4 text-center hover:text-secondary hover:bg-primary mx-3 px-4 py-2 rounded text-base"/>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
