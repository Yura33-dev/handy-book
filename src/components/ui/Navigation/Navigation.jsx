import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <Link to="/">Home Page</Link>
      <div className="account">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </header>
  );
}

export default Navigation;
