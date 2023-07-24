import { AddIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Button,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel fontSize="xs" paddingTop="20px" textColor="gray.500">
        Username
      </FormLabel>
      <InputGroup>
        <InputLeftElement>
          <Avatar backgroundColor="gray.300" size="xs" />
        </InputLeftElement>
        <Input
          focusBorderColor="teal.400"
          variant="outline"
          placeholder="Enter your username"
          type="text"
          name="name"
        />
      </InputGroup>
      <FormLabel fontSize="xs" paddingTop="20px" textColor="gray.500">
        Email
      </FormLabel>
      <InputGroup>
        <InputLeftElement>
          <EmailIcon color="gray.300" />
        </InputLeftElement>
        <Input
          focusBorderColor="teal.400"
          variant="outline"
          placeholder="Enter your email address"
          type="email"
          name="email"
        />
      </InputGroup>
      <FormLabel fontSize="xs" paddingTop="20px" textColor="gray.500">
        Password
      </FormLabel>
      <Input
        focusBorderColor="teal.400"
        variant="outline"
        placeholder="Enter your password"
        type="password"
        name="password"
      />
      <Button
        rightIcon={<AddIcon />}
        colorScheme="teal"
        variant="outline"
        type="submit"
        mt="40px"
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
