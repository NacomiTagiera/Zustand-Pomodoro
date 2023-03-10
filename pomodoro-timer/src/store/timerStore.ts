import { create } from "zustand";

type TimerMode = "work" | "break";

interface TimerState {
  mode: TimerMode;
  workLength: number;
  breakLength: number;
  timeLeft: number;
  isRunning: boolean;
  pauseTimer: () => void;
  restartTimer: () => void;
  changeMode: (mode: TimerMode) => void;
  changeLength: (sessionType: TimerMode, length: number) => void;
}

const initialState: TimerState = {
  mode: "work",
  workLength: 25,
  breakLength: 5,
  timeLeft: 25 * 60,
  isRunning: false,
  pauseTimer: () => {},
  restartTimer: () => {},
  changeMode: () => {},
  changeLength: () => {},
};

export const useTimerStore = create<TimerState>((set, get) => ({
  ...initialState,
  pauseTimer: () => {
    set({ isRunning: false });
  },
  restartTimer: () => {
    const mode = get().mode;
    const timeLeft = get()[`${mode}Length`] * 60;
    set({ timeLeft, isRunning: true });
  },
  changeMode: (mode: TimerMode) => {
    set({ mode });
    get().restartTimer();
  },
  changeLength: (sessionType: TimerMode, length: number) => {
    set((_state) => ({ [`${sessionType}Length`]: length }));
    if (sessionType === get().mode) {
      set({ timeLeft: length * 60 });
    }
  },
}));
