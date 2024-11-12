// src/pages/GiftPage.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import GiftBox from "../assets/giftbox.png";
import { triggerConfetti } from "../utils/confettiExplosion";

const GiftPage: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();

  const handleOpenGift = () => {
    setIsOpened(true);
    triggerConfetti(); // Panggil ledakan confetti
    setTimeout(() => navigate("/surprise"), 6000); 
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-4">
      {!isOpened ? (
        <motion.div
          onClick={handleOpenGift}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="cursor-pointer flex flex-col items-center"
        >
          <img src={GiftBox} alt="Gift Box" className="w-48 h-48 mb-4" />
          <p className="text-lg font-medium text-pink-600">
            Tap untuk buka kadonya yang spesial buat kamu ❤️
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl font-extrabold text-pink-500 mb-4"
          >
            Cieeee udah 21 tahun benerannn 🥳
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg font-medium text-pink-600 max-w-md mt-20"
          >
            Ini hadiah kecil dari aku...
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};

export default GiftPage;
