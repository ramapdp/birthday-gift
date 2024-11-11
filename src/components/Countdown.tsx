import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  targetDate: string;
  onComplete: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, onComplete }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft();
      setTimeLeft(updatedTimeLeft);

      // Jika waktu habis, panggil onComplete dan hentikan timer
      if (
        updatedTimeLeft.days <= 0 &&
        updatedTimeLeft.hours <= 0 &&
        updatedTimeLeft.minutes <= 0 &&
        updatedTimeLeft.seconds <= 0
      ) {
        clearInterval(timer);
        onComplete();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  return (
    <div className="flex space-x-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div
          key={unit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl font-bold">{value}</div>
          <div className="text-sm">{unit}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default Countdown;
