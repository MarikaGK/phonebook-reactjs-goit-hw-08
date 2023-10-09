import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Button, Flex, Heading } from "@chakra-ui/react";

const UserMenu = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Flex gap="20px" alignItems="center">
        <Link to="/">
          <Heading as="h2" size={{ base: "md", md: "lg"}}>
            PhoneBook
          </Heading>
        </Link>
        {isLoggedIn && (
          <Link to={`/contacts/`}>
            <Button colorScheme="whiteAlpha" textColor="gray.800" type="button" display={{ base: "none", md: "flex" }}>
              Contacts
            </Button>
          </Link>
        )}
      </Flex>
    </nav>
  );
};

export default UserMenu;
