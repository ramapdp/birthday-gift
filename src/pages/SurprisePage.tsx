// src/pages/SurprisePage.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PhotoAlbum from "../assets/fotbarLove.png"; // Tambahkan gambar kenangan atau ikon album foto

const SurprisePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold text-pink-600 mb-4"
      >
        EAAAAA 🥳
      </motion.h1>

      <motion.img
        src={PhotoAlbum}
        alt="Photo Album"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-72 h-44 mb-4 object-cover"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-lg font-medium text-pink-500 max-w-lg"
      >
        Kadonya nanti aja yahhh aku kasih langsung.. biar lebih spesial 🤭
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-8 space-y-4"
      >
        <motion.button
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/my-galleries")}
          className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-lg font-semibold hover:bg-pink-600"
        >
          next 📸
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SurprisePage;
