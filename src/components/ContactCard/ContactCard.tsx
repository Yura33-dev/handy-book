import { useContext, useState } from 'react';
import { useAppSelector } from '../../helpers/hooks/reduxHooks';
import { selectLoading } from '../../redux/contacts/selectors';
import { useAvatar } from '../../helpers/hooks/useAvatar';
import { ModalWindowContext } from '../../helpers/context/modal.context';
import { ModalConstants } from '../../helpers/constants/modalConstants';

import {
  Avatar,
  Card,
  CardHeader,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Skeleton,
} from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

type ContactCardProps = {
  name: string;
  number: string;
  id: string;
};

function ContactCard({ name, number, id }: ContactCardProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const { handleModalOpen } = useContext(ModalWindowContext);

  const handleDeleteClick = (contactId: string) => {
    handleMenuClose();
    handleModalOpen(ModalConstants.Delete, contactId);
  };

  const handleEditClick = (contactId: string) => {
    handleMenuClose();
    handleModalOpen(ModalConstants.Edit, contactId);
  };

  const { avatar } = useAvatar(name);
  const isLoading = useAppSelector(selectLoading);

  return (
    <Card variant="outlined" sx={{ flex: '1 1 auto' }}>
      <CardHeader
        avatar={
          isLoading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar {...avatar} aria-label="recipe" alt={name} />
          )
        }
        action={
          isLoading ? null : (
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertOutlinedIcon />
            </IconButton>
          )
        }
        title={
          isLoading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            name
          )
        }
        subheader={
          isLoading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            number
          )
        }
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

export default ContactCard;
