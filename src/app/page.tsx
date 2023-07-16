import { Box } from '@mui/material';

import About from '@/components/About';
import Timer from '@/components/Timer';

export default function Home() {
  return (
    <Box
      component='main'
      sx={{ mx: 'auto', pt: 4, width: 'min(100vw, 350px)' }}
    >
      <Timer />
      <About />
    </Box>
  );
}
