import { Container, Heading } from '@chakra-ui/react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const RegisterPage = () => (
  <Container maxW="1600px" minW="320px" py="80px" centerContent>
    <Heading as="h3" fontSize='2xl' py='20px'>
      Register new user
    </Heading>
    <RegisterForm />
  </Container>
);

export default RegisterPage;
