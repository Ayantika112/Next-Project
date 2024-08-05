import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const [mainDivHeight, setMainDivHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateHeight = () => {
        const headerHeight = document.querySelector('.scroll-smooth header')?.clientHeight || 0;
        const footerHeight = document.querySelector('.scroll-smooth footer')?.clientHeight || 0;
        const totalHeight = window.innerHeight - headerHeight - footerHeight;
        setMainDivHeight(totalHeight);
      };

      updateHeight();
      window.addEventListener('resize', updateHeight);

      return () => window.removeEventListener('resize', updateHeight);
    }
  }, []);

  return (
    <>
      <div className="scroll-smooth md:scroll-auto">
        <Navbar />
        <main class="fixed left-0 right-0 overflow-y-auto overflow-x-hidden slim-scroll" style={{height : mainDivHeight+'px'}}>
        {children}</main>
        <Footer />
      </div>
    </>
  );
}
