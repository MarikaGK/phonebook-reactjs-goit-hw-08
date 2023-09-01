import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/filter/selectors';
import Loader from '../Loader/Loader';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { List, ListItem, Heading, Box } from '@chakra-ui/react';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts(contacts, filter);

  return isLoading ? (
    <Loader />
  ) : (
    <Box>
      <Heading as="h2" fontSize="lg" textColor="teal.700">
        Contact list
      </Heading>
      <List>
        {[...visibleContacts]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ id, name, number }) => (
            <ListItem key={id}>
              <Contact id={id} name={name} number={number} />
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default ContactList;
