"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PersonMobile = ({ title, subtitle, hoverText, image, hoverImage, bgColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex-grow flex flex-col relative">
      <Link href="/" className={`absolute top-4 right-8 ${bgColor} rounded px-2 py-1 text-white font-bold font-geologica animate-bounceRight hover:animate-none z-30`}>
        <Image src="/arrow-right.svg" width={30} height={30} alt="arrow-right" />
      </Link>
      <Link href="/" className="flex-grow relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: isHovered ? 0 : 1 }} transition={{ duration: 0.2 }} className="absolute inset-0 z-10">
          <Image src={`/${image}.png`} alt="teacher" fill="true" style={{ objectFit: "contain" }} />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0 }} transition={{ duration: 0.2 }} className="absolute inset-0 z-10">
          <Image src={`/${hoverImage}.png`} alt="teacher" fill="true" style={{ objectFit: "contain" }} />
        </motion.div>
      </Link>
      <div className={`${bgColor} sm:text-xl text-center px-4 py-2 text-white font-semibold z-40 font-geologica`}>{isHovered ? hoverText : `${title} που διψά ${subtitle};`}</div>
    </div>
  );
};

export default PersonMobile;

/*
<div className="self-center font-semibold flex flex-col text-center sm:text-left">
        <div className="font-bold">{title}</div>
        <div>που διψά</div>
        <div>{subtitle}</div>
        <div className="bg-blue-500 rounded text-white px-3 py-1 hover:bg-blue-600 mt-2 mr-auto">{buttonText}</div>
      </div>
      */

/*

      fill="true" style={{ objectFit: "contain" }}
      */

/*

      <Image src={`/${image}.png`} alt="teacher" fill="true" style={{ objectFit: "contain" }} className={`${isHovered ? "opacity-0" : "opacity-100"} transition-opacity duration-300 z-50`} />
            <Image src={`/${hoverImage}.png`} alt="teacher" fill="true" style={{ objectFit: "contain" }} className={`${isHovered ? "opacity-100" : "opacity-0"} transition-opacity duration-300 z-10`} />

            */
