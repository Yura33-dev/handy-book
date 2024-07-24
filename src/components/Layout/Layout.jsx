import PropTypes from 'prop-types';
import AppBar from '../AppBar/AppBar';

function Layout({ children }) {
  return (
    <>
      <AppBar />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
