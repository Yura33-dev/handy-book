import PropTypes from 'prop-types';
import AppBar from '../AppBar/AppBar';
import { Container } from '@mui/material';

function Layout({ onCloseSideBar, children }) {
  return (
    <>
      <AppBar onCloseSideBar={onCloseSideBar} />
      <Container maxWidth="lg">
        <main>{children}</main>
      </Container>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.array,
  onCloseSideBar: PropTypes.func,
};

export default Layout;
