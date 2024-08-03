import toast, { Toaster } from "react-hot-toast";
import CountdownTimer from ".";
import "./timer.css";

const CountdownTimerTest = () => {
  const handleTimeFinish = () => {
    toast("Times Up !!!", {
      icon: "⏱️",
    });
  };

  return (
    <div className="countdown-timer-container">
      <h2>CountDown Timer</h2>
      <Toaster/>
      <CountdownTimer initialTime={300} onTimeFinish={handleTimeFinish} />
    </div>
  );
};

export default CountdownTimerTest;
