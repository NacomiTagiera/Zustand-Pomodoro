import { Card as MuiCard } from '@mui/material';

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiCard
      component='section'
      variant='outlined'
      sx={{
        borderRadius: 6,
        boxShadow: 18,
        color: '#fff',
        px: 4,
        py: 5,
        textAlign: 'center',
      }}
    >
      {children}
    </MuiCard>
  );
};
