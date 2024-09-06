import React from "react";
import { LogoHaru, HeaderContent, Nav, HeaderTitle } from "../components";
const Header = () => {
  return (
    <header className="w-full max-w-[1200px] flex flex-col gap-2">
      <div className="w-full grid grid-cols-3 items-center mt-4 pb-4 border-b border-[#f5f5f5]">
        <HeaderTitle/>
        <LogoHaru />
        <HeaderContent />
      </div>

      <Nav />
    </header>
  );
};

export default Header;
