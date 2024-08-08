import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Navbar() {

  var addToCart = useSelector((item) => item.cart.cart);
  console.log('Total number of item :- ' + addToCart);

  return (
    <>
      <header className="text-white-100 sticky top-0 bg-gradient-to-r from-indigo-700 via-violet-500 to-orange-700 body-font">
        <div className="container ax-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <Link
            href={"/"}
            className="flex title-font items-center font-extrabold uppercase text-gray-100"
          >
            <Image
              src={"https://flowbite.com/images/logo.svg"}
              alt="E Commerce Logo"
              width={80}
              height={120}
            />
            <p className="leading-5 text-xl mx-2">E Commerce Site</p>
          </Link>
          <nav
            className="md:ml-auto flex flex-wrap items-center text-base justify-center"
            style={{ position: "absolute", right: "0" }}
          >
            <Link
              className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
              href={"/cart/viewMyCart"}
            >
              <FaCartArrowDown />
              <span className="pb-4">{addToCart.length}</span>
            </Link>
            <Link
              className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
              href={"/signIn"}
            >
              <FaSignOutAlt className="fa-3x" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
