import PomodoroProvider from "./providers/PomodoroProvider";
import Description from "./components/Description";
import Settings from "./components/Settings";
import Timer from "./components/Timer";
import { Box, Typography } from "@mui/material";

import "./App.css";

export default function App() {
  return (
    <Box
      sx={{
        marginInline: "auto",
        width: { xs: "90vw", md: "65vw", lg: "50vw" },
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          letterSpacing: "2px",
          pb: 5,
          textAlign: "center",
        }}
      >
        Pomodoro Timer
      </Typography>
      <PomodoroProvider>
        <Timer />
        <Settings />
      </PomodoroProvider>
      <Description />
    </Box>
  );
}
