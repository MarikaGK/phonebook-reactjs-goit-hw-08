import { Flex, Text } from '@chakra-ui/react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Flex py="70px" justifyContent="center" gap="100px" flexWrap="wrap">
      <ContactForm />
      {contacts.length === 0 ? (
        <Text
          fontSize="xl"
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="wide"
          color="gray.800"
        >
          No contacts yet
        </Text>
      ) : (
        <Flex flexDirection="column" gap="50px">
          <Filter />
          <ContactList />
        </Flex>
      )}
    </Flex>
  );
};

export default ContactsPage;
