import Countdown from "./components/Countdown";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-5xl font-bold mb-6 text-black">Happy Birthday Countdown!</h1>
      <Countdown targetDate="2024-12-31T00:00:00" />
      <p className="text-lg mt-4 text-black">Counting down to a special day!</p>
    </div>
  );
}

export default App;
