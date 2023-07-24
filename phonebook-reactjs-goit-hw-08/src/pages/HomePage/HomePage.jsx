import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Heading, Text, Container, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container maxW="1600px" minW="320px" py="80px" centerContent>
      <Heading as="h1">Welcome to PhoneBook</Heading>
      <Text
        fontSize="xl"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="wide"
        color="teal.600"
      >
        All your contacts in one place
      </Text>
      {isLoggedIn ? (
        <Flex py="20px">
          <Text fontSize="xl" letterSpacing="wide" color="teal.800">
            Go visit your
          </Text>
          <Link to={'/contacts'}>
            <Text
              paddingLeft="5px"
              fontSize="xl"
              letterSpacing="wide"
              color="teal.500"
            >
              contacts
            </Text>
          </Link>
        </Flex>
      ) : (
        <Flex flexDirection="column" py="50px" alignItems="center">
          <Link to={`/login`}>
            <Button w="150px" colorScheme="teal" variant="solid">
              Log In
            </Button>
          </Link>
          <Flex py="20px" justifyContent="center">
            <Text fontSize="md" letterSpacing="wide" color="gray.800">
              New to our app?
            </Text>
            <Link to={'/register'}>
              <Text
                paddingLeft="5px"
                fontSize="md"
                letterSpacing="wide"
                color="teal.500"
              >
                Register new user
              </Text>
            </Link>
          </Flex>
        </Flex>
      )}
    </Container>
  );
};

export default HomePage;
