import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

function TypographyHeader({ title }) {
  return (
    <Typography
      variant="h2"
      sx={{ my: 2, fontSize: { xs: 28, sm: 40, md: 48 } }}
    >
      {title}
    </Typography>
  );
}

TypographyHeader.propTypes = {
  title: PropTypes.string,
};

export default TypographyHeader;
