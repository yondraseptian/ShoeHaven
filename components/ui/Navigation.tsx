'use client';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { categories } from "@/constants";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import React from "react";

const Navigation = ({className} : {className?: string}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem >
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              legacyBehavior
              passHref
            >
              <NavigationMenuLink className={`${className}`}>
                {category.name}
              </NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
