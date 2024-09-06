import React from "react";
import { Header, Footer } from "../components";
const Layout = ({ children }) => {
  return (
    <div className="w-full h-[100vh] flex flex-col gap-4 justify-between items-center m-auto">
      <Header />
      <main className="flex flex-col w-full gap-4 items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
