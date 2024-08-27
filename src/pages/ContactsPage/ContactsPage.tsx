import { useContext, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/reduxHooks';
import { Toaster } from 'react-hot-toast';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors';

import { ModalWindowContext } from '../../helpers/context/modal.context';
import { ModalConstants } from '../../helpers/constants/modalConstants';

import ContactNewForm from '../../components/ContactNewForm/ContactNewForm';
import ModalWindow from '../../components/ui/ModalWindow/ModalWindow';
import ContactList from '../../components/ContactList/ContactList';
import ContactEditForm from '../../components/ContactEditForm/ContactEditForm';
import ContactDeleteForm from '../../components/ContactDeleteForm/ContactDeleteForm';
import TypographyHeader from '../../components/ui/TypographyHeader/TypographyHeader';
import Filter from '../../components/Filter/Filter';

import { Box, Button, Container } from '@mui/material';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';

function ContactsPage() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectLoading);
  const { handleModalOpen } = useContext(ModalWindowContext);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      component="section"
      sx={{
        py: '1rem',
        backgroundColor: 'background.default',
        minHeight: '100vh',
      }}
    >
      <Container>
        <TypographyHeader
          variant="h2"
          title="The list of contacts"
          styles={{ mb: 2, fontSize: { xs: 28, sm: 40, md: 48 } }}
        />
        <Filter />
        <ContactList />

        <Button
          variant="contained"
          startIcon={<PersonAddAlt1OutlinedIcon />}
          sx={{ display: 'flex', margin: '15px auto' }}
          onClick={() => handleModalOpen(ModalConstants.New)}
          disabled={isLoading}
        >
          new contact
        </Button>

        <ModalWindow title="New" modalType={ModalConstants.New}>
          <ContactNewForm />
        </ModalWindow>

        <ModalWindow title="Edit" modalType={ModalConstants.Edit}>
          <ContactEditForm />
        </ModalWindow>

        <ModalWindow title="Delete" modalType={ModalConstants.Delete}>
          <ContactDeleteForm />
        </ModalWindow>

        <Toaster />
      </Container>
    </Box>
  );
}

export default ContactsPage;
