import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LogoutIcon from '@mui/icons-material/Logout';
import { ListItemIcon } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations';

const TemporaryDrawer = ({ isActive, onCloseSideBar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handeLogoutClick = () => {
    dispatch(logout());
    navigate('/');
  };

  const DrawerList = (
    <List sx={{ width: { xs: 200, md: 300 } }} onClick={onCloseSideBar}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ContactPhoneIcon />
          </ListItemIcon>
          <ListItemText primary="My contacts" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton onClick={handeLogoutClick}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </ListItem>
    </List>
  );

  return (
    <Drawer open={isActive} onClose={onCloseSideBar}>
      {DrawerList}
    </Drawer>
  );
};

TemporaryDrawer.propTypes = {
  isActive: PropTypes.bool,
  onCloseSideBar: PropTypes.func,
};

export default TemporaryDrawer;
