import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <nav>
        <Link to="/">Home Page</Link>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
}

export default AppBar;
