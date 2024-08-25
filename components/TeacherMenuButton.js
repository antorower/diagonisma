"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const TeacherMenuButton = ({ bgColor }) => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsMenuExpanded(true)} className="md:hidden">
        <Image src="/menu.svg" width={35} height={35} alt="menu-icon" />
      </button>
      <AnimatePresence>
        {isMenuExpanded && (
          <motion.div key="menu" initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-100%", opacity: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} className={`fixed inset-0 ${bgColor} flex flex-col items-center justify-between text-white font-semibold z-50 px-8`}>
            <div className="flex flex-col flex-grow text-xl justify-center gap-8">
              <motion.div key="service-item" whileTap={{ scale: 1.05, rotate: "5deg" }}>
                <Link href="/office" className="flex items-center gap-2">
                  <div>
                    <Image src="/paperclip.svg" width={18} height={18} alt="services-icon" />
                  </div>
                  <div>Υπηρεσίες</div>
                </Link>
              </motion.div>
              <motion.div key="explore-item" whileTap={{ scale: 1.05, rotate: "5deg" }}>
                <Link href="/" className="flex items-center gap-2">
                  <div>
                    <Image src="/search.svg" width={20} height={20} alt="search-icon" />
                  </div>
                  <div>Εξερεύνηση</div>
                </Link>
              </motion.div>
              <motion.div key="community-item" whileTap={{ scale: 1.05, rotate: "-5deg" }}>
                <Link href="/" className="flex items-center gap-2">
                  <div>
                    <Image src="/community.svg" width={22} height={22} alt="community-icon" />
                  </div>
                  <div>Κοινότητα</div>
                </Link>
              </motion.div>
              <motion.button key="close-button" onClick={() => setIsMenuExpanded(false)} whileTap={{ scale: 0.9 }} className="flex absolute top-4 right-4 items-center gap-2">
                <Image src="/close.svg" width={25} height={25} alt="close-icon" />
              </motion.button>
            </div>
            <div>
              <Image src="/girl.png" width={200} height={200} alt="menu-girl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      ;
    </div>
  );
};

export default TeacherMenuButton;
