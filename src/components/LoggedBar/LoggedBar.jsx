import { Button, Flex, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const LoggedBar = () => {
  const { name, email } = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Wrap spacing="20px">
      <WrapItem>
        <Flex flexDirection="column">
          <Heading as="h2" size="md">
            Hello, {name}
          </Heading>
          <Text fontSize="xs">{email}</Text>
        </Flex>
      </WrapItem>
      <WrapItem>
        <Button
          colorScheme="whiteAlpha"
          textColor="gray.800"
          onClick={() => dispatch(logOut())}
        >
          Log out
        </Button>
      </WrapItem>
    </Wrap>
  );
};

export default LoggedBar;
