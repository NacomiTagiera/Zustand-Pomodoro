import { Button, Stack } from "@mui/material";

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
          <Button
            className="button"
            disabled={!!(workLength === 1) || isRunning}
            onClick={decrementWorkLength}
          >
            -
          </Button>
          <p style={pStyles}>{workLength}</p>
          <Button
            className="button"
            disabled={!!(workLength === 60) || isRunning}
            onClick={incrementWorkLength}
          >
            +
          </Button>
        </Stack>
      </Stack>
      <Stack alignItems="center">
        <span style={{ fontWeight: 600 }}>Break Length</span>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <Button
            className="button"
            disabled={!!(breakLength === 1) || isRunning}
            onClick={decrementBreakLength}
          >
            -
          </Button>
          <p style={pStyles}>{breakLength}</p>
          <Button
            className="button"
            disabled={!!(breakLength === 60) || isRunning}
            onClick={incrementBreakLength}
          >
            +
          </Button>
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
