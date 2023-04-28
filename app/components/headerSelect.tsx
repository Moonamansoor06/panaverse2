"use client";
import { useState, useEffect } from "react";
import Nav from "./nav";
import Header from "./header";


import { usePathname } from "next/navigation";

const HeaderSelect = () => {
  const router = usePathname();
  const [isSpecialPage, setIsSpecialPage] = useState(false);
  const [isCorePage, setIsCorePage] = useState(false);

  useEffect(() => {
    
    setIsSpecialPage(router.startsWith("/special/"))
    setIsCorePage(router.startsWith("/core/"))
  }, [router]);

  return (
    <div className="h-auto z-20 sticky inset-0 backdrop-blur-md">
      {isSpecialPage||isCorePage ? <Header />:<Nav />  }
    </div>
  );
};

export default HeaderSelect;