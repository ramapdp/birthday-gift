// src/components/TypingText.tsx
import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";

interface TypingTextProps {
  text: string;
  className?: string; // Tambahkan properti className sebagai opsional
}

const TypingText: React.FC<TypingTextProps> = ({ text, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`${className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-500 drop-shadow-lg pulse-text`}
    >
      <ReactTypingEffect
        text={text}
        speed={100}
        eraseDelay={1000000}
        typingDelay={200}
      />
    </motion.div>
  );
};

export default TypingText;
