import React from "react";
import TypingText from "../components/TypingTextEffect";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const BirthdayMessage: React.FC = () => {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedUp: () => navigate("/my-wish"),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      className="relative h-screen flex flex-col items-center justify-center text-center"
      {...handlers}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center text-center"
      >
        <TypingText text="Happy Birthday Nandutttt❤️" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 7, ease: "easeOut" }}
          className="text-lg mt-8"
        >
          make a wish dulu dong.. biar aku ikut aminin
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7, duration: 1 }}
          className="flex flex-col items-center justify-center text-sm text-gray-400 absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 ml-2"
            animate={{
              y: [0, -10, 0], // Gerakan bouncing
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
            />
          </motion.svg>
          kalo udah geser ke atas yaah
        </motion.p>
      </motion.div>
    </div>
  );
};

export default BirthdayMessage;
