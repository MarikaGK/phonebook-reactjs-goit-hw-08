import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import {
  Button,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
  Box 
} from '@chakra-ui/react';
import { AddIcon, PhoneIcon } from '@chakra-ui/icons';
import notification from '../../utils/notification';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleFormSubmit = evt => {
    evt.preventDefault();

    const formDOM = evt.currentTarget;
    const newName = formDOM.elements.name.value;
    const newNumber = formDOM.elements.number.value;

    if (newName === '') {
      return notification.notifyEmptyNameInput();
    }
    if (contacts.find(e => e.name === newName)) {
      return notification.notifyContactExist(newName);
    }
    if (contacts.find(e => e.number === newNumber)) {
      return notification.notifyNumberExist(newNumber);
    }
    if (newNumber === '') {
      return notification.notifyEmptyNumberInput();
    }

    dispatch(
      addContact({
        name: newName,
        number: newNumber,
      })
    );
    formDOM.reset();
  };

  return (
    <Box boxShadow="2xl" p="6" rounded="md" bg="white" h='fit-content'>
      <form onSubmit={handleFormSubmit}>
        <Heading as="h3" size="md" textColor="gray.700">
          Add new contact
        </Heading>
        <FormLabel fontSize="xs" paddingTop="20px" textColor="gray.500">
          Name
        </FormLabel>
        <InputGroup>
          <InputLeftElement>
            <Avatar backgroundColor="gray.300" size="xs" />
          </InputLeftElement>
          <Input
            focusBorderColor="teal.400"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputGroup>
        <FormLabel fontSize="xs" paddingTop="20px" textColor="gray.500">
          Number
        </FormLabel>
        <InputGroup>
          <InputLeftElement>
            <PhoneIcon color="gray.300" />
          </InputLeftElement>
          <Input
            focusBorderColor="teal.400"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputGroup>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="teal"
          variant="solid"
          type="submit"
          mt="40px"
        >
          Add to contacts
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
