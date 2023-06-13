import { Stack } from "@mui/material";

import CustomButton from "./Button";
import { useTimerStore } from "@/store/timerStore";
import styles from "@/styles/components/ButtonGroup.module.scss";

interface Props {
  label: string;
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

export default function ButtonGroup({
  label,
  value,
  onDecrement,
  onIncrement,
}: Props) {
  const { isRunning } = useTimerStore();

  return (
    <div className={styles["button-group"]}>
      <span className={styles.label}>{label}</span>
      <Stack alignItems="center" justifyContent="space-between" direction="row">
        <CustomButton
          title={
            label === "Session Length"
              ? "Decrease the session length"
              : "Decrease the break length"
          }
          disabled={isRunning || value === 1}
          onClick={onDecrement}
        >
          -
        </CustomButton>
        <p className={styles.value}>{value}</p>
        <CustomButton
          title={
            label === "Session Length"
              ? "Increase the session length"
              : "Increase the break length"
          }
          disabled={isRunning || value === 60}
          onClick={onIncrement}
        >
          +
        </CustomButton>
      </Stack>
    </div>
  );
}
