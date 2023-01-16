import { useContext } from "react";
import { Card, Slider, Typography } from "@mui/material";
import { pomodoroContext } from "./PomodoroProvider";

export default function Settings() {
  const settingsInfo = useContext(pomodoroContext);

  const handleChangeWork = (event: Event, newLength: number | number[]) => {
    settingsInfo.setWorkMinutes(newLength as number);
  };

  const handleChangeBreak = (event: Event, newLength: number | number[]) => {
    settingsInfo.setBreakMinutes(newLength as number);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "#2f3544",
        borderRadius: "10px",
        color: "white",
        mt: "75px",
        mx: "auto",
        px: 3,
        py: 2,
        width: "200px",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h4" pb={3}>
        Settings
      </Typography>
      <label>Work: {settingsInfo.workMinutes}:00</label>
      <Slider
        value={settingsInfo.workMinutes}
        min={1}
        max={60}
        onChange={handleChangeWork}
      />
      <label>Break: {settingsInfo.breakMinutes}:00</label>
      <Slider
        value={settingsInfo.breakMinutes}
        min={1}
        max={60}
        onChange={handleChangeBreak}
      />
    </Card>
  );
}
