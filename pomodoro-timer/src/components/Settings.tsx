import { useEffect, useState } from "react";
import { Stack } from "@mui/material";

import CustomButton from "./Button";
import { useTimerStore } from "@/store/timerStore";

export default function Settings() {
  const [screenWidth, setScreenWidth] = useState<number | null>(
    getCurrentWidth()
  );
  const { breakLength, workLength, isRunning, changeLength } = useTimerStore();

  function getCurrentWidth() {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }

    return null;
  }

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(getCurrentWidth());
    };

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [screenWidth]);

  const incrementBreakLength = () => {
    changeLength("break", breakLength + 1);
  };

  const decrementBreakLength = () => {
    changeLength("break", breakLength - 1);
  };

  const incrementWorkLength = () => {
    changeLength("work", workLength + 1);
  };

  const decrementWorkLength = () => {
    changeLength("work", workLength - 1);
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="space-between"
      direction={screenWidth !== null && screenWidth < 310 ? "column" : "row"}
      color="#e53935"
    >
      <Stack alignItems="center">
        <span style={{ fontWeight: 600 }}>Session Length</span>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <CustomButton
            disabled={workLength === 1 || isRunning}
            onClick={decrementWorkLength}
          >
            -
          </CustomButton>
          <p style={pStyles}>{workLength}</p>
          <CustomButton
            disabled={workLength === 6 || isRunning}
            onClick={incrementWorkLength}
          >
            +
          </CustomButton>
        </Stack>
      </Stack>
      <Stack alignItems="center">
        <span style={{ fontWeight: 600 }}>Break Length</span>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <CustomButton
            disabled={breakLength === 1 || isRunning}
            onClick={decrementBreakLength}
          >
            -
          </CustomButton>
          <p style={pStyles}>{breakLength}</p>
          <CustomButton
            disabled={breakLength === 60 || isRunning}
            onClick={incrementBreakLength}
          >
            +
          </CustomButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

const pStyles = {
  fontSize: 26,
  lineHeight: 1,
  px: 7,
};
