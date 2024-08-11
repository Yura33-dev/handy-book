import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { ModalWindowContext } from '../../context/ModalWindow/modal.context';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactCard from '../../components/ContactCard/ContactCard';
import ModalWindow from '../../components/ui/ModalWindow/ModalWindow';

import { Button, List, ListItem, Typography } from '@mui/material';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';

function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);
  const { handleOpen } = useContext(ModalWindowContext);

  return (
    <>
      <Typography
        variant="h2"
        sx={{ my: 2, fontSize: { xs: 28, sm: 40, md: 48 } }}
      >
        The list of contacts
      </Typography>

      <List
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: '15px' },
          flexWrap: 'wrap',
        }}
      >
        {contacts.map(contact => (
          <ListItem
            sx={{
              overflow: 'hidden',
              padding: '0',
              flex: {
                sm: '1 1 calc(50% - 30px)',
                md: '1 1 calc(33.33% - 45px)',
              },
            }}
            key={contact.id}
          >
            <ContactCard name={contact.name} number={contact.number} />
          </ListItem>
        ))}
      </List>

      <Button
        variant="contained"
        startIcon={<PersonAddAlt1OutlinedIcon />}
        sx={{ display: 'flex', margin: '15px auto' }}
        onClick={handleOpen}
      >
        new contact
      </Button>

      <ModalWindow title="New contact">
        <ContactForm />
      </ModalWindow>

      <Toaster />
    </>
  );
}

export default ContactsPage;
