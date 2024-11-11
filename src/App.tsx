import Countdown from "./components/Countdown";
import "./assets/background.css";
import { useState } from "react";
import TypingText from "./components/TypingTextEffect";

function App() {
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);

  const handleCountdownComplete = () => {
    setIsCountdownComplete(true);
  };

  // const targetDate = '2024-11-14T00:00:00';
  const targetDate = new Date(Date.now() + 5000).toISOString();

  return (
    <div className="max-h-screen">
      {/* <audio src="/music.mp3" autoPlay loop /> */}

      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div className="flex flex-col items-center justify-center h-screen text-white px-4 text-center">
        {!isCountdownComplete ? (
          <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Maaf kak kayanya website ini belum jadi 😅
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 mb-6 opacity-90 max-w-md">
              Sambil nunggu aku harap kamu cover music ini sihh🤪
            </p>
            <Countdown
              targetDate={targetDate}
              onComplete={handleCountdownComplete}
            />
          </>
        ) : (
          <TypingText text="Happy Birthday Nandutttttt❤️" />
        )}
      </div>
    </div>
  );
}

export default App;
