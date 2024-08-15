import React from "react";
import icons from "../../ulities/icons/icons";
import { Link } from "react-router-dom";
import path from "../../ulities/path";
const HeaderContent = () => {
  const { BiSearchAlt2 } = icons;
  return (
    <div className="flex items-center gap-12 pl-4">
      <Link
        to={path.LOGIN}
        className="text-[18px] hover:opacity-50 transition-all ease-in cursor-pointer"
      >
        Account
      </Link>

      <div className="text-[18px] hover:opacity-50 transition-all ease-in cursor-pointer">
        Cart
      </div>

      <div>
        <BiSearchAlt2 size={18} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default HeaderContent;
