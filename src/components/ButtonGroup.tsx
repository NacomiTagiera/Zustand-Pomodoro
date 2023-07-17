import { Add, Remove } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';

import { useTimerStore } from '@/store/timerStore';

import Button from './Button';

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
    <Stack alignItems='center'>
      <Typography fontWeight={500}>{label}</Typography>
      <Stack alignItems='center' justifyContent='space-between' direction='row'>
        <Button
          icon={<Remove />}
          label={
            label === 'Session Length'
              ? 'Decrease the session length'
              : 'Decrease the break length'
          }
          small
          disabled={isRunning || value === 1}
          onClick={onDecrement}
        />
        <Typography fontSize='28px' lineHeight='1'>
          {value}
        </Typography>
        <Button
          icon={<Add />}
          label={
            label === 'Session Length'
              ? 'Increase the session length'
              : 'Increase the break length'
          }
          small
          disabled={isRunning || value === 60}
          onClick={onIncrement}
        />
      </Stack>
    </Stack>
  );
}
