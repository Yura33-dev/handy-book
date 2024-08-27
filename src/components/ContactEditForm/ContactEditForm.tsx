import { useContext, useId } from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/reduxHooks';
import { FormikHelpers, useFormik } from 'formik';
import toast from 'react-hot-toast';
import { editContact } from '../../redux/contacts/operations';
import {
  selectContactById,
  selectLoading,
} from '../../redux/contacts/selectors';
import { ModalWindowContext } from '../../helpers/context/modal.context';
import { ModalConstants } from '../../helpers/constants/modalConstants';
import { addContactSchema as editContactSchema } from '../../helpers/schemasValidation/addContactSchemaValidation';
import AlertMessage from '../ui/AlertMessage/AlertMessage';

import {
  Button,
  ButtonGroup,
  CircularProgress,
  InputAdornment,
  TextField,
  useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

interface IFormikValues {
  name: string;
  number: string;
}

function ContactEditForm() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectLoading);
  const { getModalData, handleModalClose } = useContext(ModalWindowContext);

  const [contact] = useAppSelector(
    selectContactById(getModalData(ModalConstants.Edit) as string) // try to fix it
  );

  const nameFieldId = useId();
  const numberFieldId = useId();

  const initValues: IFormikValues = {
    name: contact?.name || '',
    number: contact?.number || '',
  };

  const formik = useFormik({
    initialValues: initValues,
    validationSchema: editContactSchema,
    onSubmit: handleSubmit,
  });

  async function handleSubmit(
    editedContact: IFormikValues,
    actions: FormikHelpers<IFormikValues>
  ) {
    try {
      await dispatch(
        editContact({ id: contact.id, ...editedContact })
      ).unwrap();

      toast.custom(<AlertMessage message="Contact has been edited" />);
      handleModalClose(ModalConstants.Edit);
      actions.resetForm();
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
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
        sx={{ gap: '10px', mt: 3 }}
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
            'Edit contact'
          )}
        </Button>

        <Button
          variant="text"
          onClick={() => handleModalClose(ModalConstants.Edit)}
          disabled={isLoading}
        >
          Back
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default ContactEditForm;
