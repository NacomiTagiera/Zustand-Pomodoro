import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface PomodoroContext {
  workMinutes: number;
  setWorkMinutes: Dispatch<SetStateAction<number>>;
  breakMinutes: number;
  setBreakMinutes: Dispatch<SetStateAction<number>>;
}

interface PomodoroProviderProps {
  children: ReactNode;
}

export const pomodoroContext = createContext<PomodoroContext>({
  workMinutes: 1,
  setWorkMinutes: () => {},
  breakMinutes: 1,
  setBreakMinutes: () => {},
});

export default function PomodoroProvider({ children }: PomodoroProviderProps) {
  const [workMinutes, setWorkMinutes] = useState<number>(1);
  const [breakMinutes, setBreakMinutes] = useState<number>(1);

  return (
    <pomodoroContext.Provider
      value={{
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
