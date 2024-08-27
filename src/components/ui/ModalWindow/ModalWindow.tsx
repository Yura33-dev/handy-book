import { useContext } from 'react';
import { ModalWindowContext } from '../../../helpers/context/modal.context';

import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material';
import { ModalConstants } from '../../../helpers/constants/modalConstants';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%' },
  maxWidth: { sm: '400px' },
  bgcolor: 'background.paper',
  boxShadow: 24,
  padding: '15px',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
};

type ModalWindowProps = {
  children: React.ReactNode;
  title: string;
  modalType: ModalConstants.Delete | ModalConstants.Edit | ModalConstants.New;
};

function ModalWindow({ children, title, modalType }: ModalWindowProps) {
  const { isModalOpen, handleModalClose } = useContext(ModalWindowContext);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      open={isModalOpen(modalType)}
      onClose={() => handleModalClose(modalType)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isModalOpen(modalType)}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            variant="h6"
            sx={{ flex: '0 0 auto' }}
          >
            {title}
          </Typography>

          {children}
        </Box>
      </Fade>
    </Modal>
  );
}

export default ModalWindow;
