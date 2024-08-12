import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors';
import { ModalWindowContext } from '../../helpers/context/modal.context';
import {
  MODAL_DELETE_CONTACT,
  MODAL_EDIT_CONTACT,
  MODAL_NEW_CONTACT,
} from '../../helpers/constants/modalConstants';
import ContactNewForm from '../../components/ContactNewForm/ContactNewForm';
import ModalWindow from '../../components/ui/ModalWindow/ModalWindow';
import ContactList from '../../components/ContactList/ContactList';
import ContactEditForm from '../../components/ContactEditForm/ContactEditForm';
import ContactDeleteForm from '../../components/ContactDeleteForm/ContactDeleteForm';
import TypographyHeader from '../../components/ui/TypographyHeader/TypographyHeader';

import { Button } from '@mui/material';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import Filter from '../../components/Filter/Filter';

function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { isLoading } = useSelector(selectLoading);
  const { handleModalOpen } = useContext(ModalWindowContext);

  return (
    <>
      <TypographyHeader
        variant="h2"
        title="The list of contacts"
        styles={{ my: 2, fontSize: { xs: 28, sm: 40, md: 48 } }}
      />
      <Filter />
      <ContactList />
      <Button
        variant="contained"
        startIcon={<PersonAddAlt1OutlinedIcon />}
        sx={{ display: 'flex', margin: '15px auto' }}
        onClick={() => handleModalOpen(MODAL_NEW_CONTACT)}
        disabled={isLoading}
      >
        new contact
      </Button>

      <ModalWindow title="New" modalType={MODAL_NEW_CONTACT}>
        <ContactNewForm />
      </ModalWindow>

      <ModalWindow title="Edit" modalType={MODAL_EDIT_CONTACT}>
        <ContactEditForm />
      </ModalWindow>

      <ModalWindow title="Delete" modalType={MODAL_DELETE_CONTACT}>
        <ContactDeleteForm />
      </ModalWindow>

      <Toaster />
    </>
  );
}

export default ContactsPage;
