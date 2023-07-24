import { Container, Heading } from '@chakra-ui/react';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => (
  <Container maxW="1600px" minW="320px" py="80px" centerContent>
    <Heading as="h3" fontSize="2xl" py='20px'>
      Logging in progress
    </Heading>
    <LoginForm />
  </Container>
);

export default LoginPage;
