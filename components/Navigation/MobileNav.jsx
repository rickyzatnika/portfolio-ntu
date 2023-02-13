import Link from "next/link";
import React from "react";

import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

import { motion } from "framer-motion";

const MobileNav = ({ open, setOpen }) => {
  const closeMenu = () => setOpen(false);

  return (
    <>
      <div
        onClick={closeMenu}
        className={`  md:hidden overlays  fixed left-0 top-0 w-full h-screen backdrop-blur-sm bg-black/90 ${
          open ? "-translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } transition-translate duration-200 ease-in`}
      >
        <div
          className={` navSide_Menu z-50 fixed justify-evenly gap-10 flex flex-col top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-full bg-[#101010]  duration-200 ease-in p-10`}
        >
          <ul className="uppercase   w-fit flex flex-col justify-center space-y-4">
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" passHref>
                Gallery
              </Link>
            </li>

            <li>
              <Link href="/contact" passHref>
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ y: "-20%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center "
            >
              <p className="antialiased font-mono text-md text-[#949494] ">
                Connect With Me
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
