'use client';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { categories } from "@/constants";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigation = ({className} : {className?: string}) => {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem >
          {categories.map((category) => {
            const isActive = pathname === category.href || pathname?.startsWith(`${category.href}/`);
          return (
            <Link
              key={category.name}
              href={category.href}
              legacyBehavior
              passHref
              
            >
              <NavigationMenuLink className={cn(`${className}`, {'bg-primary text-secondary': isActive})}>
                {category.name}
              </NavigationMenuLink>
            </Link>
          )})}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
