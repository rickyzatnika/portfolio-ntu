import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MobileNav from "./MobileNav";

import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Hide On Scroll Navbar
  // const [show, setShow] = useState(false);
  // function NavbarControl() {
  //   if (window.scrollY > 120) {
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", NavbarControl);
  //   return () => {
  //     window.removeEventListener("scroll", NavbarControl);
  //   };
  // }, []);

  return (
    <>
      <motion.nav
        className="flex relative bg-[#bfc0bf] shadow-xl shadow-zinc-600/10 py-4 px-10 sm:px-20  w-full items-center justify-between z-[999999]"
        initial={{ y: "-150%", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
      >
        <MobileNav open={open} setOpen={setOpen} />
        <div className="w-full">
          <Link
            href="/"
            className="text-2xl lg:text-4xl font-semibold uppercase text-[#1a2b33] flex gap-2"
          >
            Restu
            <span>Syamba</span>
          </Link>
        </div>

        <div className=" flex md:flex-row gap-4 items-center justify-between">
          <div
            className=" rounded-md flex sm:hidden  relative w-10 gap-1.5 flex-col justify-between items-center"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span
              className={`h-1 w-full bg-blend-color  bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open
                  ? "rotate-45 translate-y-2.5 transition-all duration-700 delay-100 ease-linear "
                  : ""
              }`}
            ></span>
            <span
              className={`h-1 w-full top-0 bg-blend-color bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open
                  ? "-translate-y-80 transition-all duration-1000 ease-linear"
                  : ""
              }`}
            ></span>
            <span
              className={`h-1 w-full bg-blend-color bg-white rounded-lg transform transition duration-300 ease-in-out ${
                open
                  ? "-rotate-45 -translate-y-2.5 transition-all duration-700 delay-100 ease-linear "
                  : ""
              }`}
            ></span>
          </div>
          <ul className="hidden sm:flex ml-auto justify-center">
            <motion.li
              whileTap={{ cursor: "grabbing", scale: 1.2 }}
              className="navLink pl-6"
            >
              <Link href="/" passHref>
                Home
              </Link>
            </motion.li>

            <motion.li
              whileTap={{ cursor: "grabbing", scale: 1.2 }}
              className="navLink pl-6"
            >
              <Link href="/gallery" passHref>
                Gallery
              </Link>
            </motion.li>
            <motion.li
              whileTap={{
                cursor: "grabbing",
                scale: 1.2,
              }}
              className="navLink pl-6"
            >
              <Link href="/contact" passHref>
                Contact
              </Link>
            </motion.li>
          </ul>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
