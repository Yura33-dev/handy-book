import { Typography } from '@mui/material';

type ErrorMessageProps = {
  message: string;
};

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <Typography
      paragraph
      sx={{
        marginTop: 2,
        fontSize: { xs: 12, sm: 14 },
        textAlign: 'center',
        color: 'error.dark',
      }}
    >
      {message}
    </Typography>
  );
}

export default ErrorMessage;
