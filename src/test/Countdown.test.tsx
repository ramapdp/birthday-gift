import { render, screen } from "@testing-library/react";
import Countdown from "../components/Countdown";
import '@testing-library/jest-dom';

test("renders countdown component correctly", () => {
  const targetDate = new Date(Date.now() + 10000).toISOString(); // 10 detik ke depan
  render(<Countdown targetDate={targetDate} />);

  // Periksa apakah countdown menampilkan hari, jam, menit, dan detik
  expect(screen.getByText(/days/i)).toBeInTheDocument();
  expect(screen.getByText(/hours/i)).toBeInTheDocument();
  expect(screen.getByText(/minutes/i)).toBeInTheDocument();
  expect(screen.getByText(/seconds/i)).toBeInTheDocument();
});
