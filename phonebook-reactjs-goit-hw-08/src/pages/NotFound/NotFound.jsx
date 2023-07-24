import { Container, Heading, Text } from '@chakra-ui/react';

const NotFound = () => (
  <Container maxW="1600px" minW="320px" py="80px" centerContent>
    <Heading as="h1">Are you lost?</Heading>
    <Text
      fontSize="xl"
      fontWeight="bold"
      textTransform="uppercase"
      letterSpacing="wide"
      color="gray.600"
    >
      Try to go somewhere else
    </Text>
  </Container>
);

export default NotFound;
