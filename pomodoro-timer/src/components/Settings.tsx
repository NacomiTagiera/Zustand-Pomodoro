import { Stack } from "@mui/material";

import CustomButton from "./Button";
import { useTimerStore } from "@/store/timerStore";

export default function Settings() {
  const { breakLength, workLength, isRunning, changeLength } = useTimerStore();

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
      direction="row"
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
            disabled={!!(workLength === 1) || isRunning}
            onClick={decrementWorkLength}
          >
            -
          </CustomButton>
          <p style={pStyles}>{workLength}</p>
          <CustomButton
            disabled={!!(workLength === 60) || isRunning}
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
            disabled={!!(breakLength === 1) || isRunning}
            onClick={decrementBreakLength}
          >
            -
          </CustomButton>
          <p style={pStyles}>{breakLength}</p>
          <CustomButton
            disabled={!!(breakLength === 60) || isRunning}
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
