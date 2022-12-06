import { useContext, useState } from "react";
import { Button, Card, Dialog, Slider, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { pomodoroContext } from "./PomodoroProvider";

export default function Settings() {
  const settingsInfo = useContext(pomodoroContext);

  const handleCloseSettings = () => {
    settingsInfo.setShowSettings(false);
  };

  const handleChangeWork = (event: Event, newLength: number | number[]) => {
    settingsInfo.setWorkMinutes(newLength as number);
  };

  const handleChangeBreak = (event: Event, newLength: number | number[]) => {
    settingsInfo.setWorkMinutes(newLength as number);
  };

  return (
    <Dialog open={settingsInfo.showSettings} onClose={handleCloseSettings}>
      <Card
        variant="outlined"
        sx={{
          px: 3,
          py: 2,
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{ pb: 3, textAlign: "center" }}
        >
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
        <CancelIcon
          color="action"
          onClick={handleCloseSettings}
          sx={{
            fontSize: 20,
            position: "absolute",
            left: 5,
            top: 5,
            transition: "0.3s",
            "&:hover": {
              cursor: "pointer",
              opacity: 0.5,
              transform: "scale(0.95)",
            },
          }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ textTransform: "uppercase" }}
          onClick={() => handleCloseSettings()}
        >
          save
        </Button>
      </Card>
    </Dialog>
  );
}
