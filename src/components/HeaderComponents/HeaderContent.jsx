import React, { useState } from "react";
import icons from "../../ulities/icons/icons";
import { Link } from "react-router-dom";
import path from "../../ulities/path";

const HeaderContent = () => {
  const { BiSearchAlt2 } = icons;
  const [isShow, setIsShow] = useState(false)
  const openSearch = () => {
    setIsShow(!isShow)
  }

  return (
    <div className="flex items-center justify-self-end gap-12 pl-4">
      <Link
        to={path.LOGIN}
        className="text-[16px] font-baskervville uppercase hover:opacity-50 transition-all ease-in cursor-pointer"
      >
        Account
      </Link>

      <div className="text-[16px] uppercase font-baskervville hover:opacity-50 transition-all ease-in cursor-pointer">
        Cart
      </div>

      <div className="flex items-center w-full transition-all ease-linear rounded-full border-[1px] p-2 hover:border-mid2">

        <input type="text" className={`${isShow ? 'w-full' : 'hidden'} px-2 border-none outline-none text-[14px]`} />
        <BiSearchAlt2 
          onClick={()=> openSearch()}        
          size={16} 
          className="cursor-pointer " />

      </div>
    </div>
  );
};

export default HeaderContent;
