// src/pages/MemoriesPage.tsx
import React from "react";
import { motion } from "framer-motion";
import Photo1 from "../assets/gambar1.jpg";
import Photo2 from "../assets/gambar2.jpg";
import Photo3 from "../assets/gambar3.jpg";
import Photo4 from "../assets/gambar4.jpg";
import Photo5 from "../assets/gambar5.jpg";
import Photo6 from "../assets/gambar6.jpg";
import Photo7 from "../assets/gambar7.jpg";
import Photo8 from "../assets/gambar8.jpg";
import Photo9 from "../assets/gambar9.jpg";
import Photo10 from "../assets/gambar10.jpg";
import Photo11 from "../assets/gambar11.jpg";
import Photo12 from "../assets/gambar12.jpg";
import Photo13 from "../assets/gambar13.jpg";
import Photo14 from "../assets/gambar14.jpg";
import Photo15 from "../assets/gambar15.jpg";
import Photo16 from "../assets/gambar16.jpg";
import Photo17 from "../assets/gambar17.jpg";
import Photo18 from "../assets/gambar18.jpg";

// Daftar foto kenangan
const memories = [
  { id: 1, src: Photo1, caption: "Kenangan 1" },
  { id: 2, src: Photo2, caption: "Kenangan 2" },
  { id: 3, src: Photo3, caption: "Kenangan 3" },
  { id: 4, src: Photo4, caption: "Kenangan 4" },
  { id: 5, src: Photo5, caption: "Kenangan 5" },
  { id: 6, src: Photo6, caption: "Kenangan 6" },
  { id: 7, src: Photo7, caption: "Kenangan 7" },
  { id: 8, src: Photo8, caption: "Kenangan 8" },
  { id: 9, src: Photo9, caption: "Kenangan 9" },
  { id: 10, src: Photo10, caption: "Kenangan 10" },
  { id: 11, src: Photo11, caption: "Kenangan 11" },
  { id: 12, src: Photo12, caption: "Kenangan 12" },
  { id: 13, src: Photo13, caption: "Kenangan 13" },
  { id: 14, src: Photo14, caption: "Kenangan 14" },
  { id: 15, src: Photo15, caption: "Kenangan 15" },
  { id: 16, src: Photo16, caption: "Kenangan 16" },
  { id: 17, src: Photo17, caption: "Kenangan 17" },
  { id: 18, src: Photo18, caption: "Kenangan 18" },
];

const heartPositions = [
  { x: 180, y: 110 },
  { x: 150, y: 95 },
  { x: 210, y: 95 },
  { x: 115, y: 105 },
  { x: 245, y: 105 },
  { x: 90, y: 125 },
  { x: 270, y: 125 },
  { x: 85, y: 160 },
  { x: 275, y: 160 },
  { x: 100, y: 190 },
  { x: 260, y: 190 },
  { x: 120, y: 220 },
  { x: 240, y: 220 },
  { x: 140, y: 250 },
  { x: 220, y: 250 },
  { x: 160, y: 270 },
  { x: 200, y: 270 },
  { x: 180, y: 290 },
];

const MemoriesPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-[400px] h-[400px] overflow-hidden"
      >
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: heartPositions[index % heartPositions.length].x,
              y: heartPositions[index % heartPositions.length].y,
            }}
            transition={{ duration: 1.5 + index * 0.2 }}
            className="absolute"
          >
            <img
              src={memory.src}
              alt={memory.caption}
              className="w-10 h-10 object-cover rounded-full shadow-lg border-2 border-pink-300"
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-5 px-5 text-center text-xs sm:text-sm md:text-base lg:text-lg font-normal text-pink-400"
      >
        ndutt karna kita gapunya banyak foto bareng, jadi aku kasih foto aku ajaa yahh🤣 <br />
        (jujur aku bingung contentnya apa, ini pun seadanya karena dikejar deadline, semoga kamu suka yahh)
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 1.5 }}
        className="pt-7 font-bold text-pink-700 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl"
      >
        SEKALI LAGI,<br></br> HAPPY BIRTHDAY, NAANDUTT🦂
      </motion.h1>
    </div>
  );
};

export default MemoriesPage;
