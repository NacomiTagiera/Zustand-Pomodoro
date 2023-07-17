import { Fab } from '@mui/material';

interface Props {
  icon: React.ReactNode;
  label: string;
  disabled?: boolean;
  small?: boolean;
  onClick: () => void;
}

export default function Button({
  icon,
  label,
  disabled = false,
  small = false,
  onClick,
}: Props) {
  return (
    <Fab
      sx={{
        m: '8px',
      }}
      color='error'
      size={small ? 'small' : 'medium'}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
    </Fab>
  );
}
