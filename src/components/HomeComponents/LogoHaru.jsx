import React from "react";

// img
import LogoHarucafe from "../../image/logo/logoHaru.jpg";
import { Link } from "react-router-dom";
import path from "../../ulities/path";

const LogoHaru = () => {
  return (
    <Link
      to={path.HOME}
      className="w-[100px] h-[100px] rounded-full overflow-hidden border border-mid3 hover:border-mid4"
    >
      <img
        src={LogoHarucafe}
        alt="logo"
        className="w-full h-full object-cover"
      />
    </Link>
  );
};

export default LogoHaru;
