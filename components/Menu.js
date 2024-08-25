"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuButton from "./MenuButton";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <div className="flex flex-row-reverse md:flex-row justify-between items-center bg-blue-500 px-8 py-4 shadow-lg z-50 text-sm font-geologica md:text-base">
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link href="/">
          <Image src="/logo.svg" width={30} height={30} alt="diagonisma-logo" />
        </Link>
      </motion.div>
      <div className="flex items-center gap-8 text-white font-semibold">
        <motion.div whileHover={{ scale: 1.05, rotate: "5deg" }} className="md:flex hidden">
          <Link href="/" className="flex items-center gap-2">
            <div>
              <Image src="/paperclip.svg" width={18} height={18} alt="services-icon" />
            </div>
            <div>Υπηρεσίες</div>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05, rotate: "5deg" }} className="md:flex hidden">
          <Link href="/" className="flex items-center gap-2">
            <div>
              <Image src="/search.svg" width={20} height={20} alt="search-icon" />
            </div>
            <div>Εξερεύνηση</div>
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05, rotate: "-5deg" }} className="md:flex hidden">
          <Link href="/" className="flex items-center gap-2">
            <div>
              <Image src="/community.svg" width={22} height={22} alt="community-icon" />
            </div>
            <div>Κοινότητα</div>
          </Link>
        </motion.div>
        <Link href="/" className="">
          <motion.div whileHover={{ scale: 1.05 }} className="flex gap-2 items-center bg-blue-600 px-3 py-2 text-white font-bold rounded">
            <div>
              <Image src="/pen.svg" width={15} height={15} className="transform scale-x-[-1]" alt="office" />
            </div>
            <div>Το γραφείο μου</div>
          </motion.div>
        </Link>
      </div>
      <MenuButton />
    </div>
  );
};

export default Menu;
