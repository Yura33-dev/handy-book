import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';

function Layout({ children }) {
  return (
    <>
      <Navigation />

      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
