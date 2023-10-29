'use client';

import { Box, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

import { useTimerStore } from '@/store/timerStore';

export const Header = () => {
  const { mode, breakLength, workLength } = useTimerStore();

  return (
    <Box component='header'>
      <Typography variant='h4' component='h1' color={red[600]}>
        Pomodoro Timer
      </Typography>
      <Typography variant='subtitle1' color={red[300]}>
        {mode === 'work'
          ? `Focus on your work and don't get distracted for only ${workLength} ${
              workLength > 1 ? 'minutes' : 'minute'
            }`
          : `It's time for well-deserved ${breakLength}-minute break`}
      </Typography>
    </Box>
  );
};
