import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { resetAuthError } from '../../../redux/auth/slice';

type OppositeOfferProps = {
  isRegistered: boolean;
  style?: object | null;
};

function OppositeOffer({ isRegistered, style = null }: OppositeOfferProps) {
  const dispatch = useDispatch();

  const displayedTextQuestion = isRegistered
    ? 'Already have an account?'
    : 'Have no account yet?';
  const displayedTextOffer = isRegistered ? 'Login.' : 'Register now!';

  return (
    <Typography
      paragraph
      sx={
        style
          ? style
          : {
              fontSize: { xs: 13, md: 15 },
              marginTop: { xs: 2 },
              textAlign: { xs: 'center' },
              color: 'text.secondary',
            }
      }
    >
      {displayedTextQuestion}{' '}
      <MuiLink
        component={RouterLink}
        to={isRegistered ? '/login' : '/register'}
        color="secondary"
        underline="none"
        onClick={() => dispatch(resetAuthError())}
      >
        {displayedTextOffer}
      </MuiLink>
    </Typography>
  );
}

export default OppositeOffer;
