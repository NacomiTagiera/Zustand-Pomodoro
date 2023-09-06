import { Stack } from '@mui/material';

import { useTimerStore } from '@/store/timerStore';

import ButtonGroup from './ButtonGroup';

export default function Settings() {
  const { breakLength, workLength, changeLength } = useTimerStore();

  const handleLengthChange = (type: 'break' | 'work', value: number) => {
    changeLength(type, value);
  };

  return (
    <Stack alignItems='center' justifyContent='space-between' direction='row' color='#e53935'>
      <ButtonGroup
        label='Session Length'
        value={workLength}
        onDecrement={() => handleLengthChange('work', workLength - 1)}
        onIncrement={() => handleLengthChange('work', workLength + 1)}
      />
      <ButtonGroup
        label='Break Length'
        value={breakLength}
        onDecrement={() => handleLengthChange('break', breakLength - 1)}
        onIncrement={() => handleLengthChange('break', breakLength + 1)}
      />
    </Stack>
  );
}
