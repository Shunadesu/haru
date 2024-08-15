import React from "react";
import { LogoHaru, HeaderContent } from "../components";
import icons from "../ulities/icons/icons";
const Header = () => {
  const { BsInstagram } = icons;
  return (
    <header className="w-full flex justify-between items-center mt-4">
      <a
        target="https://www.instagram.com/cafeharu_harucraft"
        href="https://www.instagram.com/cafeharu_harucraft"
        className="text-[18px] flex gap-2 items-center gradient-text hover:bg-gradient-to-r from-start via-mid2 to-mid4 "
      >
        <BsInstagram className="text-mid4" />
        Ceramic and Art Home
      </a>

      <LogoHaru />

      <HeaderContent />
    </header>
  );
};

export default Header;
