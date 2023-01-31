import { useContext, useEffect, useRef, useState } from "react";
import { pomodoroContext } from "../providers/PomodoroProvider";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Box, Button, Typography } from "@mui/material";
import { PauseCircle, PlayCircle } from "@mui/icons-material";
import { numberToString } from "../utils/numberToString";
import timesUp from "../sounds/timesUp.mp3";

type timerMode = "work" | "break";

export default function Timer() {
  const pomodoroInfo = useContext(pomodoroContext);

  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [mode, setMode] = useState<timerMode>("work");
  const [secondsLeft, setSecondsLeft] = useState<number>(0);

  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);
  const secondsLeftRef = useRef(secondsLeft);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  function playSound() {
    new Audio(timesUp).play();
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds =
        (nextMode === "work"
          ? pomodoroInfo.workMinutes
          : pomodoroInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;

      playSound();
    }

    secondsLeftRef.current = pomodoroInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (!secondsLeftRef.current) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [pomodoroInfo]);

  const totalSeconds =
    mode === "work"
      ? pomodoroInfo.workMinutes * 60
      : pomodoroInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  let minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;

  return (
    <Box sx={{ textAlign: "center" }}>
      <div style={{ width: "300px", height: "300px", marginInline: "auto" }}>
        <Typography variant="h2" component="h2" pb={2} textAlign="center">
          {mode === "work" ? "Work" : "Break"}
        </Typography>
        <CircularProgressbar
          value={percentage}
          text={numberToString(minutes) + ":" + numberToString(seconds)}
          styles={buildStyles({
            pathColor: mode === "work" ? "#f54e4e" : "#4aec8c",
            textColor: "#fff",
            trailColor: "rgba(255, 255, 255, 0.2)",
          })}
        />
      </div>
      {isPaused ? (
        <Button
          onClick={() => {
            setIsPaused(false);
            isPausedRef.current = false;
          }}
        >
          <PlayCircle fontSize="large" />
        </Button>
      ) : (
        <Button
          onClick={() => {
            setIsPaused(true);
            isPausedRef.current = true;
          }}
        >
          <PauseCircle fontSize="large" />
        </Button>
      )}
    </Box>
  );
}
