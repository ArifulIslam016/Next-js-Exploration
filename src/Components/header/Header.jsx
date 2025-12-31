import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="p-4 border-b-2 border-gray-700 flex flex-col md:flex-row justify-between items-center">
      <Link href={"/"}>
        {" "}
        <h1 className="text-3xl font-extrabold  text-sky-400">Dev Story </h1>
      </Link>
      <nav className="space-x-1">
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/stories"}>Stories</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;
