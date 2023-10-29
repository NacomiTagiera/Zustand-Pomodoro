import { create } from 'zustand';

type TimerMode = 'work' | 'break';

type State = {
  mode: TimerMode;
  workLength: number;
  breakLength: number;
  timeLeft: number;
  isRunning: boolean;
  toggleTimer: () => void;
  countDown: () => void;
  resetTimer: () => void;
  changeMode: (mode: TimerMode) => void;
  changeLength: (sessionType: TimerMode, length: number) => void;
};

type Actions = {
  toggleTimer: () => void;
  countDown: () => void;
  resetTimer: () => void;
  changeMode: (mode: TimerMode) => void;
  changeLength: (sessionType: TimerMode, length: number) => void;
};

export const useTimerStore = create<State & Actions>((set, get) => ({
  mode: 'work',
  workLength: 25,
  breakLength: 5,
  timeLeft: 25 * 60,
  isRunning: false,
  toggleTimer: () => {
    set((state) => ({ isRunning: !state.isRunning }));
  },
  countDown: () => {
    set((state) => ({ timeLeft: state.timeLeft - 1 }));
  },
  resetTimer: () => {
    set({ timeLeft: get()[`${get().mode}Length`] * 60, isRunning: true });
  },
  changeMode: (mode: TimerMode) => {
    set({ mode });
    get().resetTimer();
  },
  changeLength: (sessionType: TimerMode, length: number) => {
    set((_state) => ({ [`${sessionType}Length`]: length }));
    if (sessionType === get().mode) {
      set({ timeLeft: length * 60 });
    }
  },
}));
