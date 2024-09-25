'use client';
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";
import UserNav from "./UserNav";

const HeaderNav = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  return (
    <header className={`header ${isScrolling ? 'bg-secondary shadow-lg' : 'bg-transparent'}`}>
      <div className="flex items-center">
        <h1 className="text-3xl">ShoeHaven</h1>
        <Navigation className="hidden md:inline hover:text-secondary hover:bg-primary mx-3 px-4 py-2 rounded text-base" />
      </div>
      <UserNav className="hidden md:flex gap-2" />
      <MobileNav />
    </header>
  );
};

export default HeaderNav;
