import { useContext, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { addContact } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors';
import { ModalWindowContext } from '../../helpers/context/modal.context';
import { addContactSchema } from '../../helpers/schemas/addContactSchemaValidation';
import AlertMessage from '../ui/AlertMessage/AlertMessage';

import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  InputAdornment,
  TextField,
  useMediaQuery,
} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

function ContactForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  const { handleClose } = useContext(ModalWindowContext);

  const nameFieldId = useId();
  const numberFieldId = useId();

  const initValues = { name: '', number: '' };

  const formik = useFormik({
    initialValues: initValues,
    validationSchema: addContactSchema,
    onSubmit: handleSubmit,
  });

  async function handleSubmit(contact, actions) {
    try {
      await dispatch(addContact(contact)).unwrap();
      actions.resetForm();
      toast.custom(<AlertMessage message="Contact has been added" />);
      handleClose();
    } catch (error) {
      toast.custom(
        <AlertMessage
          severity="error"
          message="Something went wrong. Please, try again!"
        />
      );
    }
  }

  const isScreenXS = useMediaQuery('(max-width:600px)');
  const circularProgressProp = {
    size: isScreenXS ? 25 : 40,
  };

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      autoComplete="off"
      sx={{
        mt: 4,
        flexGrow: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TextField
          id={nameFieldId}
          name="name"
          label="Full name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          required
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          id={numberFieldId}
          name="number"
          label="Phone number"
          type="text"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
          required
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalPhoneOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <ButtonGroup
        orientation="vertical"
        disabled={isLoading}
        sx={{ gap: '10px' }}
      >
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <CircularProgress
              {...circularProgressProp}
              sx={{ color: 'secondary.main' }}
            />
          ) : (
            'Add contact'
          )}
        </Button>

        <Button variant="text" onClick={handleClose}>
          Back
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default ContactForm;
