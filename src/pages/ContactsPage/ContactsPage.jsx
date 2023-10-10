import { Flex, Text } from "@chakra-ui/react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Filter from "../../components/Filter/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Flex
      py={{ base: "0 20px", md: "30px", xl: "70px" }}
      justifyContent="center"
      gap={{ base: "20px", md: "10px", xl: "100px" }}
      flexDirection={{ base: "column", xl: "row"}}
      alignItems={{ md: "center", xl: "start"}}
    >
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
