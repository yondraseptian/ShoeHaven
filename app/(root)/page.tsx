import HeroSection from "@/components/ui/HeroSection";
import Products from "@/components/ui/Products";
import React from "react";

function page() {
  return (
    <div>
      <HeroSection />
      <Products />
      <div className="h-20"></div>
    </div>
  );
}

export default page;
