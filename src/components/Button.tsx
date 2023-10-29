import { Fab } from '@mui/material';

type Props = {
  icon: React.ReactNode;
  label: string;
  disabled?: boolean;
  size?: 'small' | 'medium';
  onClick: () => void;
};

export const Button = ({ icon, label, disabled, size = 'medium', onClick }: Props) => {
  return (
    <Fab
      sx={{
        m: '8px',
      }}
      color='error'
      size={size}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
    </Fab>
  );
};
