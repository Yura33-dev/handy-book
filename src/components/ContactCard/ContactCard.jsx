import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useAvatar } from '../../helpers/hooks/useAvatar';
import { ModalWindowContext } from '../../helpers/context/modal.context';
import {
  MODAL_DELETE_CONTACT,
  MODAL_EDIT_CONTACT,
} from '../../helpers/constants/modalConstants';

import {
  Avatar,
  Card,
  CardHeader,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

// const temporaryStyles = {
//   sx: { backgroundColor: '#8322b9' },
//   children: 'YK',
// };

function ContactCard({ name, number, id }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const { handleModalOpen } = useContext(ModalWindowContext);

  const handleDeleteClick = contactId => {
    handleMenuClose();
    handleModalOpen(MODAL_DELETE_CONTACT, contactId);
  };

  const handleEditClick = contactId => {
    handleMenuClose();
    handleModalOpen(MODAL_EDIT_CONTACT, contactId);
  };

  const { avatar } = useAvatar(name);

  return (
    <Card variant="outlined" sx={{ flex: '1 1 auto' }}>
      <CardHeader
        avatar={<Avatar {...avatar} aria-label="recipe" alt={name} />}
        action={
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertOutlinedIcon />
          </IconButton>
        }
        title={name}
        subheader={number}
        sx={{ overflow: 'hidden' }}
      />

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleEditClick(id)}>
          <ListItemIcon>
            <EditOutlinedIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText>Edit</ListItemText>
        </MenuItem>

        <MenuItem
          sx={{ color: 'error.main' }}
          onClick={() => handleDeleteClick(id)}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <DeleteOutlineOutlinedIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </Card>
  );
}

ContactCard.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default ContactCard;
