import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <ul className="userMenu">
      <li>
        <Link to="/contacts">My contacts</Link>
      </li>
      <li>
        <button onClick={() => dispatch(logout())}>Logout</button>
      </li>
    </ul>
  );
};

export default UserMenu;
