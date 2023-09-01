import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectContacts } from "../../redux/contacts/selectors";
import { addContact, deleteContact } from "../../redux/contacts/operations";
import {
  Avatar,
  Button,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { DeleteIcon, PhoneIcon, SpinnerIcon } from "@chakra-ui/icons";
import notification from "../../utils/notification";

const ContactModal = ({
  id,
  name,
  number,
  toggleModal,
  isOpen,
  handleDelete,
}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number);

  const handleNameChange = (e) => {
    e.preventDefault();
    setEditName(e.target.value);
  };

  const handleNumberChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setEditNumber(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formDOM = e.currentTarget;
    const editedId = formDOM.id;
    const editedName = formDOM.elements.name.value;
    const editedNumber = formDOM.elements.number.value;

    if (editedName === "") {
      return notification.notifyEmptyNameInput();
    }
    if (editedNumber === "") {
      return notification.notifyEmptyNumberInput();
    }
    if (contacts.find((e) => e.name === editedName && e.id !== editedId)) {
      return notification.notifyContactExist(editName);
    }
    if (contacts.find((e) => e.number === editedNumber && e.id !== editedId)) {
      return notification.notifyNumberExist(editNumber);
    }

    const editedContact = {
      id: editedId,
      name: editedName,
      number: editedNumber,
    };

    dispatch(deleteContact(editedId));
    dispatch(addContact(editedContact));
    toggleModal();
  };

  const handleCancel = () => {
    toggleModal();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleCancel}>
        <ModalOverlay>
          <ModalContent p="40px">
            <ModalCloseButton />
            <Flex flexDirection="column" alignItems="center">
              <Avatar name={name} size="2xl" />
              <ModalHeader>{name}</ModalHeader>
            </Flex>
            <ModalBody>
              <form id={id} onSubmit={handleFormSubmit}>
                <FormLabel fontSize="xs" paddingTop="20px" textColor="gray.500">
                  Edit name
                </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Avatar backgroundColor="gray.300" size="xs" />
                  </InputLeftElement>
                  <Input
                    focusBorderColor="teal.400"
                    type="text"
                    name="name"
                    value={editName}
                    onChange={handleNameChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                  />
                </InputGroup>

                <FormLabel fontSize="xs" paddingTop="20px" textColor="gray.500">
                  Edit number
                </FormLabel>
                <InputGroup>
                  <InputLeftElement>
                    <PhoneIcon color="gray.300" />
                  </InputLeftElement>
                  <Input
                    focusBorderColor="teal.400"
                    type="tel"
                    name="number"
                    value={editNumber}
                    onChange={handleNumberChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                  />
                </InputGroup>
                <Stack
                  direction="row"
                  spacing={6}
                  paddingTop="30px"
                  justifyContent="center"
                >
                  <Button
                    rightIcon={<SpinnerIcon />}
                    colorScheme="teal"
                    variant="solid"
                    type="submit"
                  >
                    Save
                  </Button>
                  <Button
                    rightIcon={<DeleteIcon />}
                    colorScheme="teal"
                    variant="ghost"
                    type="button"
                    id={id}
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </Stack>
              </form>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default ContactModal;

ContactModal.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  toggleModal: PropTypes.func,
  isOpen: PropTypes.bool,
  handleDelete: PropTypes.func,
};
