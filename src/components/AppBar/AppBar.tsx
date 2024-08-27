import { Link as RouterLink } from 'react-router-dom';
import { useAppSelector } from '../../helpers/hooks/reduxHooks';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import {
  AppBar as MuiAppBar,
  Toolbar,
  Link as MuiLink,
  Avatar,
  Container,
} from '@mui/material';
import MobileMenuBtn from '../ui/MobileMenuBtn/MobileMenuBtn';
import MainHeader from '../ui/MainHeader/MainHeader';
import { useAvatar } from '../../helpers/hooks/useAvatar';

type AppBarProps = {
  onCloseSideBar: () => void;
};

function AppBar({ onCloseSideBar }: AppBarProps) {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const user = useAppSelector(selectUser);
  const { avatar } = useAvatar(user.name ?? '');

  return (
    <MuiAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            padding: { xs: '12px 0 12px 0' },
          }}
        >
          {isLoggedIn && <MobileMenuBtn onCloseSideBar={onCloseSideBar} />}

          <MainHeader />

          {isLoggedIn ? (
            <Avatar {...avatar} />
          ) : (
            <MuiLink
              component={RouterLink}
              variant="body2"
              to="/login"
              color="primary.contrastText"
              underline="none"
              sx={{
                textTransform: 'uppercase',
                fontWeight: 500,
                fontSize: { xs: 14, sm: 16 },
              }}
            >
              Login
            </MuiLink>
          )}
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}

export default AppBar;
