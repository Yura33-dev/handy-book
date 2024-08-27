import { useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/reduxHooks';
import toast from 'react-hot-toast';
import { selectLoading } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { ModalWindowContext } from '../../helpers/context/modal.context';
import AlertMessage from '../ui/AlertMessage/AlertMessage';

import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Typography,
} from '@mui/material';

import { ModalConstants } from '../../helpers/constants/modalConstants';

function ContactDeleteForm() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectLoading);

  const { handleModalClose, getModalData } = useContext(ModalWindowContext);

  async function handleDeleteClick() {
    try {
      await dispatch(
        deleteContact(getModalData(ModalConstants.Delete))
      ).unwrap();
      handleModalClose(ModalConstants.Delete);
      toast.custom(<AlertMessage message="Contact has been deleted" />);
    } catch (error) {
      toast.custom(
        <AlertMessage
          severity="error"
          message="Something went wrong. Please, try again!"
        />
      );
    }
  }

  return (
    <Box
      sx={{
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
      }}
    >
      <Typography variant="body1" align="center">
        Are you sure to delete this contact?
      </Typography>

      <ButtonGroup
        orientation="horizontal"
        disabled={isLoading}
        sx={{ gap: '10px' }}
      >
        <Button
          color="primary"
          variant="contained"
          type="button"
          onClick={handleDeleteClick}
        >
          {isLoading ? (
            <CircularProgress size={25} sx={{ color: 'secondary.main' }} />
          ) : (
            'Delete'
          )}
        </Button>

        <Button
          variant="text"
          onClick={() => handleModalClose(ModalConstants.Delete)}
        >
          Back
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default ContactDeleteForm;
