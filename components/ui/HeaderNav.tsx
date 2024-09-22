import MobileNav from "./MobileNav";
import Navigation from "./Navigation";
import UserNav from "./UserNav";

const HeaderNav = () => {
  return (
    <header className="header">
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
