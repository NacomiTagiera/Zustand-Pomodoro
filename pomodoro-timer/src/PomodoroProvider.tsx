import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface PomodoroContext {
  showSettings: boolean;
  setShowSettings: Dispatch<SetStateAction<boolean>>;
  workMinutes: number;
  setWorkMinutes: Dispatch<SetStateAction<number>>;
  breakMinutes: number;
  setBreakMinutes: Dispatch<SetStateAction<number>>;
}

interface PomodoroProviderProps {
  children: ReactNode;
}

export const pomodoroContext = createContext<PomodoroContext>({
  showSettings: false,
  setShowSettings: () => {},
  workMinutes: 1,
  setWorkMinutes: () => {},
  breakMinutes: 1,
  setBreakMinutes: () => {},
});

export default function PomodoroProvider({ children }: PomodoroProviderProps) {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [workMinutes, setWorkMinutes] = useState<number>(1);
  const [breakMinutes, setBreakMinutes] = useState<number>(1);

  return (
    <pomodoroContext.Provider
      value={{
        showSettings,
        setShowSettings,
        workMinutes,
        setWorkMinutes,
        breakMinutes,
        setBreakMinutes,
      }}
    >
      {children}
    </pomodoroContext.Provider>
  );
}
