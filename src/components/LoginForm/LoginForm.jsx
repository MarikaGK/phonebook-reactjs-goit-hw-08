import { logIn } from "../../redux/auth/operations";
import {
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel fontSize="xs" paddingTop="20px" textColor="gray.500">
        Email
      </FormLabel>
      <InputGroup>
        <InputLeftElement>
          <EmailIcon color="gray.300" />
        </InputLeftElement>
        <Input
          focusBorderColor="teal.400"
          placeholder="Enter your username"
          type="email"
          name="email"
        />
      </InputGroup>
      <FormLabel fontSize="xs" paddingTop="20px" textColor="gray.500">
        Password
      </FormLabel>
      <Input
        focusBorderColor="teal.400"
        placeholder="Enter your password"
        type="password"
        name="password"
      />
      <Button
        rightIcon={<ArrowRightIcon />}
        colorScheme="teal"
        variant="solid"
        type="submit"
        mt="40px"
      >
        Log In
      </Button>
    </form>
  );
};

export default LoginForm;
