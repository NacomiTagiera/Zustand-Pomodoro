import { useEffect } from "react";

import { PlayArrow, Pause, RestartAlt } from "@mui/icons-material";
import { Box, Card, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

import CustomButton from "./Button";
import Header from "./Header";
import Settings from "./Settings";
import { useTimerStore } from "@/store/timerStore";
import formatTime from "@/utils/formatTime";

export default function Timer() {
  const {
    isRunning,
    mode,
    timeLeft,
    changeMode,
    countDown,
    resetTimer,
    toggleTimer,
  } = useTimerStore();

  useEffect(() => {
    let tick: NodeJS.Timeout | null = null;

    if (isRunning) {
      tick = setInterval(() => {
        countDown();
      }, 1000);
    }

    if (timeLeft === 0) {
      const audio = new Audio("/beep.mp3");
      audio.play();
    } else if (timeLeft < 0) {
      changeMode(mode === "break" ? "work" : "break");
    }

    return () => {
      if (tick) {
        clearInterval(tick);
      }
    };
  }, [isRunning, timeLeft]);

  return (
    <Card
      component="section"
      variant="outlined"
      sx={{
        borderRadius: 6,
        boxShadow: 18,
        color: "#fff",
        px: 4,
        py: 5,
        textAlign: "center",
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: red[400],
          borderRadius: "50%",
          height: 180,
          width: 180,
          mx: "auto",
          my: 5,
          position: "relative",
        }}
      >
        <Typography
          component="h2"
          variant="h6"
          sx={{
            position: "absolute",
            top: "10%",
            opacity: 0.8,
            textTransform: "capitalize",
          }}
        >
          {mode}
        </Typography>
        <Typography component="h1" variant="h3">
          {formatTime(timeLeft)}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          position="absolute"
          bottom={-10}
        >
          <CustomButton
            title={isRunning ? "Pause the timer" : "Start the timer"}
            large
            onClick={() => toggleTimer()}
          >
            {isRunning ? <Pause /> : <PlayArrow />}
          </CustomButton>
          <CustomButton
            title="Reset the timer"
            large
            onClick={() => resetTimer()}
          >
            <RestartAlt />
          </CustomButton>
        </Stack>
      </Box>
      <Settings />
    </Card>
  );
}
