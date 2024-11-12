// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countdown from "./components/Countdown";
import "./assets/background.css";
import { useState } from "react";
import BirthdayMessage from "./components/BirthdayMessage";
import LoveLetterPage from "./components/LoveLetterPage"; // Import halaman LoveLetterPage

function App() {
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);

  const handleCountdownComplete = () => {
    setIsCountdownComplete(true);
  };

  const targetDate = new Date(Date.now() + 3000).toISOString();

  return (
    <BrowserRouter>
      <div className="max-h-screen">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <div className="flex flex-col items-center justify-center h-screen text-white px-4 text-center">
          <Routes>
            <Route
              path="/"
              element={
                !isCountdownComplete ? (
                  <>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                      CIEEE MAU 21....😅
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4 mb-6 opacity-90 max-w-[60rem]">
                      Ini special gift buat kamu, tapi maaf yahh kalo masi
                      banyak kurangnya, aku dadakan buatnya...😅
                    </p>
                    <Countdown
                      targetDate={targetDate}
                      onComplete={handleCountdownComplete}
                    />
                  </>
                ) : (
                  <BirthdayMessage />
                )
              }
            />
            <Route path="/my-wish" element={<LoveLetterPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
