import PropTypes from 'prop-types';
import { useAvatar } from '../../helpers/hooks/useAvatar';

import { Avatar, Card, CardHeader, IconButton } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const temporaryStyles = {
  sx: { backgroundColor: '#8322b9' },
  children: 'YK',
};
function ContactCard({ name, number }) {
  // const { avatar } = useAvatar(name);
  console.log(name);

  return (
    <Card variant="outlined" sx={{ flex: '1 1 auto' }}>
      <CardHeader
        avatar={<Avatar {...temporaryStyles} aria-label="recipe" alt={name} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertOutlinedIcon />
          </IconButton>
        }
        title={name}
        subheader={number}
      />
    </Card>
  );
}

ContactCard.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactCard;
