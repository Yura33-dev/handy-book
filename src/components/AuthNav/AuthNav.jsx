import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <ul className="auth">
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );
};

export default AuthNav;
