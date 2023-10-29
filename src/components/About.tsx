import { Box, Typography } from '@mui/material';

export const About = () => {
  return (
    <Box component='article' py={5}>
      <Typography variant='h5' component='h3' pb={1} pt={4} textAlign='center'>
        What is Pomodoro Technique?
      </Typography>
      <Typography
        component='p'
        sx={{
          fontSize: { xs: '16px', md: '18px' },
          px: { xs: 2, md: 0 },
        }}
        textAlign='justify'
      >
        The Pomodoro Technique is a method originally coined by Francesco Cirillo in the late 1980s.
        It uses a kitchen timer to break work into intervals, separated by short breaks. Each
        interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped
        kitchen timer Cirillo used as a university student.
      </Typography>
    </Box>
  );
};
