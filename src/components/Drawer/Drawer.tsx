import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../helpers/hooks/reduxHooks';
import { logout } from '../../redux/auth/operations';

import {
  Drawer,
  Link as MuiLink,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LogoutIcon from '@mui/icons-material/Logout';
import { ListItemIcon } from '@mui/material';

type TemporaryDrawerProps = {
  isActive: boolean;
  onCloseSideBar: () => void;
};

const TemporaryDrawer = ({
  isActive,
  onCloseSideBar,
}: TemporaryDrawerProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handeLogoutClick = () => {
    dispatch(logout());
    navigate('/');
  };

  const DrawerList = (
    <List sx={{ width: { xs: 200, md: 300 } }} onClick={onCloseSideBar}>
      <ListItem disablePadding divider>
        <ListItemButton>
          <ListItemIcon>
            <ContactPhoneIcon />
          </ListItemIcon>
          <MuiLink
            component={RouterLink}
            to="/contacts"
            color="text.primary"
            underline="none"
          >
            <ListItemText>My contacts</ListItemText>
          </MuiLink>
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

export default TemporaryDrawer;
