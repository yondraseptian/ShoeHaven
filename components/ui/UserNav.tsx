"use client";
import React, { useEffect, useState } from "react";
import { usernav } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./button";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { DropdownMenuSeparator } from "./dropdown-menu";
import { signOut } from "@/lib/actions/user.action";

const UserNav = ({ className }: { className?: string }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // State untuk loading

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setIsLoading(false); 
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <div className="hidden">Loading...</div>;
  }

  const handleLogout = async () => {
    await signOut();
    auth.signOut();
    
  };

  return (
    <div className={className}>
      {usernav.map((item) => (
        <div key={item.name} className="flex items-center gap-2">
          <Link href={item.href}>
            <Image src={item.imgUrl} width={24} height={24} alt={item.name} />
          </Link>
        </div>
      ))}
      {isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-secondary mr-2 mt-2 px-4 py-2 rounded-md border border-primary">
            <DropdownMenuGroup className="flex flex-col gap-1">
              <DropdownMenuItem className="flex items-center px-2 py-1 cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                 <Link href={"/profile"}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center px-2 py-1 cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="border border-primary"/>
              <DropdownMenuItem onClick={handleLogout} className="flex items-center px-2 py-1 cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href={"/sign-in"}>
          <Button className="bg-primary text-secondary">Sign In</Button>
        </Link>
      )}
    </div>
  );
};

export default UserNav;
