import { Stack } from "@mui/material";
import CustomButton from "./Button";

interface Props {
  disabled: boolean;
  label: string;
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

export default function ButtonGroup({
  disabled,
  label,
  value,
  onDecrement,
  onIncrement,
}: Props) {
  return (
    <Stack alignItems="center">
      <span style={{ fontWeight: 600 }}>{label}</span>
      <Stack alignItems="center" justifyContent="space-between" direction="row">
        <CustomButton
          title={
            label === "Session Length"
              ? "Decrease the session length"
              : "Decrease the break length"
          }
          disabled={disabled}
          onClick={onDecrement}
        >
          -
        </CustomButton>
        <p style={pStyles}>{value}</p>
        <CustomButton
          title={
            label === "Session Length"
              ? "Increase the session length"
              : "Increase the break length"
          }
          disabled={disabled}
          onClick={onIncrement}
        >
          +
        </CustomButton>
      </Stack>
    </Stack>
  );
}

const pStyles = {
  fontSize: 26,
  lineHeight: 1,
  px: 7,
};
