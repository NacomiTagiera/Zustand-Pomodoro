import PomodoroProvider, { pomodoroContext } from "./PomodoroProvider";
import Timer from "./Timer";
import Settings from "./Settings";
import { Box, Typography } from "@mui/material";

import "./App.css";

function App() {
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
          color: "#fff",
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
      <Box sx={{ py: 5 }}>
        <Typography
          variant="h3"
          component="h3"
          sx={{ color: "#fff", pt: 4, pb: 1, textAlign: "center" }}
        >
          What is{" "}
          <span style={{ color: "#f54e4e", fontStyle: "italic" }}>
            Pomodoro
          </span>{" "}
          Technique?
        </Typography>
        <Typography
          component="p"
          variant="body1"
          sx={{
            color: "#fff",
            fontSize: { xs: "16px", md: "18px" },
            textAlign: { xs: "left", md: "justify" },
          }}
        >
          The <b>Pomodoro Technique</b> is a method originally coined by
          <i> Francesco Cirillo</i> in the late 1980s. It uses a kitchen timer
          to break work into intervals, separated by short breaks. Each interval
          is known as a pomodoro, from the Italian word for tomato, after the
          tomato-shaped kitchen timer Cirillo used as a university student
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
