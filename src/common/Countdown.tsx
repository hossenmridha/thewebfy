
 

import { useEffect, useState } from "react";

type FormatType = "seconds" | "minutes" | "hours" | "days";

interface CountdownProps {
  number?: number;
  format?: FormatType;
}

export default function Countdown({
  number = 100,
  format = "seconds",
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let seconds = 0;

    switch (format) {
      case "seconds":
        seconds = number;
        break;
      case "minutes":
        seconds = number * 60;
        break;
      case "hours":
        seconds = number * 60 * 60;
        break;
      case "days":
        seconds = number * 60 * 60 * 24;
        break;
    }

    const then = Date.now() + seconds * 1000;

    const interval = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(secondsLeft / 86400);
      const hours = Math.floor((secondsLeft % 86400) / 3600);
      const minutes = Math.floor(((secondsLeft % 86400) % 3600) / 60);
      const secs = secondsLeft % 60;

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds: secs,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [number, format]);

  return (


    <div className="mb-10 grid grid-cols-2 justify-center gap-6 lg:flex">
      <div className="rounded-[20px] border-2 border-black px-10 py-5 text-center">
        <div className="days display-heading display-heading-1 mb-2">{timeLeft.days}</div>
        <span className="text-xl font-semibold capitalize lg:text-2xl">Days</span>
      </div>

      <div className="rounded-[20px] border-2 border-black px-10 py-5 text-center">
        <div className="hours display-heading display-heading-1 mb-2">{timeLeft.hours}</div>
        <span className="text-xl font-semibold capitalize lg:text-2xl">Hours</span>
      </div>

      <div className="rounded-[20px] border-2 border-black px-10 py-5 text-center">
        <div className="minutes display-heading display-heading-1 mb-2">{timeLeft.minutes}</div>
        <span className="text-xl font-semibold capitalize lg:text-2xl">Minutes</span>
      </div>

      <div className="rounded-[20px] border-2 border-black px-10 py-5 text-center">
        <div className="seconds display-heading display-heading-1 mb-2">{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</div>
        <span className="text-xl font-semibold capitalize lg:text-2xl">Seconds</span>
      </div>
    </div>
  );
}
