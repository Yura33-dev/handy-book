import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function ErrorMessage({ message }) {
  return (
    <Typography
      paragraph
      sx={{
        marginTop: 1,
        fontSize: { xs: 12, sm: 16 },
        textAlign: 'center',
        color: 'error.dark',
      }}
    >
      {message}
    </Typography>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
