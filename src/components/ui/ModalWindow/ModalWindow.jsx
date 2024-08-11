import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ModalWindowContext } from '../../../helpers/context/modal.context';

import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%' },
  maxWidth: { sm: '400px' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  padding: '10px 15px',
  minHeight: '360px',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
};

function ModalWindow({ children, title }) {
  const { open, handleClose } = useContext(ModalWindowContext);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6">
            {title}
          </Typography>

          {children}
        </Box>
      </Fade>
    </Modal>
  );
}

ModalWindow.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
};

export default ModalWindow;
