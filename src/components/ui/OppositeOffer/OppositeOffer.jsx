import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function OppositeOffer({ isRegistered }) {
  const displayedTextQuestion = isRegistered
    ? 'Already have account?'
    : 'Have no account yet?';
  const displayedTextOffer = isRegistered
    ? 'Login in account.'
    : 'Register now!';

  return (
    <Typography
      paragraph
      sx={{
        fontSize: { xs: 13 },
        marginTop: { xs: 2 },
        textAlign: { xs: 'center' },
        color: 'text.secondary',
      }}
    >
      {displayedTextQuestion}{' '}
      <MuiLink
        component={RouterLink}
        to={isRegistered ? '/login' : '/register'}
        color="secondary"
        underline="none"
      >
        {displayedTextOffer}
      </MuiLink>
    </Typography>
  );
}

OppositeOffer.propTypes = {
  isRegistered: PropTypes.bool,
};

export default OppositeOffer;
