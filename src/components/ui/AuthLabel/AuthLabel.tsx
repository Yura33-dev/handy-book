import { Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

type AuthLabelProps = {
  textLabel: string;
};

function AuthLabel({ textLabel }: AuthLabelProps) {
  return (
    <>
      <Box
        sx={{
          width: 50,
          height: 50,
          backgroundColor: 'secondary.main',
          margin: '0 auto 10px auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}
      >
        <LockOutlinedIcon sx={{ color: 'primary.contrastText' }} />
      </Box>

      <Typography component="h2" align="center" sx={{ mb: 2, fontSize: 20 }}>
        {textLabel}
      </Typography>
    </>
  );
}

export default AuthLabel;
