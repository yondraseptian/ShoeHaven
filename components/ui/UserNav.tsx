import React from "react";
import { usernav } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserNav = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      {usernav.map((item) => (
        <div key={item.name} className="flex items-center gap-2">
          <Link href={item.href}>
            <Image src={item.imgUrl} width={24} height={24} alt={item.name} />
          </Link>
        </div>
      ))}
      <Link href={"/profile"}>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
};

export default UserNav;
