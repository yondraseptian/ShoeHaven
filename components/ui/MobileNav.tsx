import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import React from "react";
import UserNav from "./UserNav";
import { categories } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="menu-nav">
      <Sheet>
        <SheetTrigger>
          <Image src={"/icons/menu.svg"} width={24} height={24} alt={"menu"} />
        </SheetTrigger>
        <SheetContent className="bg-secondary ">
          <SheetHeader>
            <UserNav className="md:hidden flex gap-2" />
          </SheetHeader>
          {categories.map((category) => {
            const isActive =
              pathname === category.href ||
              pathname?.startsWith(`${category.href}/`);
            return (
              <SheetClose asChild key={category.name}>
                <Link
                  key={category.name}
                  href={category.href}
                  className={cn(
                    `md:hidden flex flex-col gap-4 text-center hover:text-secondary hover:bg-primary mx-3 px-4 py-2 rounded text-base`,
                    { "bg-primary text-secondary": isActive }
                  )}
                >
                  <span>{category.name}</span>
                </Link>
              </SheetClose>
            );
          })}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
