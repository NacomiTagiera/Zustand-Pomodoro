export interface Timer {
  mode: TimerMode;
  isRunning: boolean;
  timeRemaining: { minutes: number; seconds: number };
  settingsVisible: boolean;
  settings: TimerSettings;
  settingsChanged: {
    pomodoro: boolean;
    shortBreak: boolean;
    longBreak: boolean;
  };
}

export interface TimerSettings {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  longBreakInterval: number;
  endSoundVolume: number;
  autoContinue: boolean;
}

export type TimerMode = "pomodoro" | "shortBreak" | "longBreak";
