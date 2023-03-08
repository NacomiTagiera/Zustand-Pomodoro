import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Timer } from "@/types";

const initialState: Timer = {
  mode: "pomodoro",
  isRunning: false,
  timeRemaining: {
    minutes: 25,
    seconds: 0,
  },
  settingsVisible: false,
  settings: {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 5,
    endSoundVolume: 100,
    autoContinue: false,
  },
  settingsChanged: {
    pomodoro: false,
    shortBreak: false,
    longBreak: false,
  },
};

export const useTimerStore = create(
  persist<Timer>(
    (set, get) => ({
      ...initialState,
    }),
    { name: "timer" }
  )
);
