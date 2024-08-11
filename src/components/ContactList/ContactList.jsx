import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

import { List, ListItem } from '@mui/material';
import ContactCard from '../ContactCard/ContactCard';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
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
            padding: '0',
            flex: {
              sm: '1 1 calc(50% - 30px)',
              md: '1 1 calc(33.33% - 45px)',
            },
          }}
          key={contact.id}
        >
          <ContactCard {...contact} />
        </ListItem>
      ))}
    </List>
  );
}

export default ContactList;
