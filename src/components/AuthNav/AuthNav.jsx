import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const AuthNav = () => (
  <>
    <Link to="/register">
      <Button w="100px" colorScheme="whiteAlpha" textColor="gray.800">
        Register
      </Button>
    </Link>
    <Link to="/login">
      <Button w="100px" colorScheme="blackAlpha" ml="20px">
        Log In
      </Button>
    </Link>
  </>
);

export default AuthNav;
