import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import ContactModal from '../ContactModal/ContactModal';
import { Avatar, Button, Flex, Text } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { useDispatch } from 'react-redux';

const Contact = ({ id, name, number }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = e => {
    setIsEditModalOpen(true);
  };

  const handleDelete = e => {
    const { id } = e.target;
    dispatch(deleteContact(id));
  };

  const toggleModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <Flex alignItems="center" gap="10px" py="10px">
        <Avatar name={name} size="sm" />
        <Text w="320px">
          {name}: {number}
        </Text>
        <Button
          rightIcon={<EditIcon />}
          colorScheme="teal"
          variant="outline"
          type="button"
          name="edit"
          id={id}
          onClick={handleEdit}
        >
          Edit
        </Button>
      </Flex>
      {isEditModalOpen && (
        <ContactModal
          id={id}
          name={name}
          number={number}
          isOpen={isEditModalOpen}
          handleDelete={handleDelete}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
