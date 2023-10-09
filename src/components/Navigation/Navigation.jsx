import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { useAuth } from "../../hooks/useAuth";
import LoggedBar from "../LoggedBar/LoggedBar";
import { Box, Container, Flex, Spacer } from "@chakra-ui/react";

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      w="100%"
      minW="320px"
      bgGradient={[
        "linear(to-tr, teal.300, yellow.200)",
        "linear(to-t, blue.200, teal.500)",
        "linear(to-b, orange.100, purple.300)",
      ]}
      borderBottom="1px"
      borderBottomColor="teal.100"
      boxShadow="lg"
    >
      <Container maxW="1600px" py="20px" px="25px" centerContent>
        <Box w="100%">
          <Flex flexWrap="wrap" gap="10px" justifyContent="center" alignItems="center">
            <UserMenu />
            <Spacer />
            {isLoggedIn ? <LoggedBar /> : <AuthNav />}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Navigation;
