import React from "react";
import { motion } from "framer-motion";
import TypingText from "../components/TypingTextEffect"; // Pastikan TypingTextEffect sudah ada
import { useNavigate } from "react-router-dom";

const LoveLetterPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-4">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className="text-4xl font-bold mb-8"
      >
        Aku juga punya wish buat kamu...
      </motion.h1>

      <TypingText
        text="Aku berharap diusia kamu yang makin bertambah ini, kamu makin dewasa, makin baik, diperlancar skripsiannya, makin sayang sama aku, makin sabar, makin rajin, makin pinter, makin sehat, makin makin deh pokoknya... Semoga apa yang kamu inginkan, apa yang kamu cita-citakan, apa yang kamu impikan, segera tercapai. Aamiin. Happy Birthday, ndutt! 🎉"
        className="text-lg font-normal text-gray-400 max-w-lg"
      />

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 38, duration: 1, ease: "easeInOut" }}
        className="mt-12 bg-red-400 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-500"
        onClick={() => navigate("/gift")}
      >
        Buka Hadiah 🎁
      </motion.button>
    </div>
  );
};

export default LoveLetterPage;
