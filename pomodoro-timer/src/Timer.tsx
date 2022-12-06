import { useContext, useState, useEffect, useRef } from "react";
import { pomodoroContext } from "./PomodoroProvider";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Box, Button, Typography } from "@mui/material";
import {
  PauseCircle,
  PlayCircle,
  SettingsApplications,
} from "@mui/icons-material";

export default function Timer() {
  const pomodoroInfo = useContext(pomodoroContext);

  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [mode, setMode] = useState<string>("work");
  const [secondsLeft, setSecondsLeft] = useState<number>(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
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

  let minutesStr = minutes < 10 ? "0" + String(minutes) : String(minutes);
  let secondsStr = seconds < 10 ? "0" + String(seconds) : String(seconds);

  return (
    <Box sx={{ textAlign: "center" }}>
      <div style={{ width: "300px", height: "300px", marginInline: "auto" }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{ color: "#fff", pb: 2, textAlign: "center" }}
        >
          {mode === "work" ? "Work" : "Break"}
        </Typography>
        <CircularProgressbar
          value={percentage}
          text={minutesStr + ":" + secondsStr}
          styles={buildStyles({
            pathColor: mode === "work" ? "#f54e4e" : "#4aec8c",
            textColor: "#fff",
            trailColor: "rgba(255, 255, 255, .2)",
          })}
        />
      </div>
      <Button
        onClick={() => {
          setIsPaused(false);
          isPausedRef.current = false;
        }}
      >
        <PlayCircle />
      </Button>
      <Button
        onClick={() => {
          setIsPaused(true);
          isPausedRef.current = true;
        }}
      >
        <PauseCircle />
      </Button>
      <Button onClick={() => pomodoroInfo.setShowSettings(true)}>
        <SettingsApplications />
      </Button>
    </Box>
  );
}
