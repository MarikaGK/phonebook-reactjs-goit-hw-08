import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filter/slice";
import {
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    e.preventDefault();
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <Box>
      <FormLabel fontSize="md" paddingTop="20px" textColor="gray.800">
        Filter contacts by name
      </FormLabel>
      <InputGroup>
        <InputLeftElement>
          <SearchIcon color="gray.500" />
        </InputLeftElement>
        <Input
          focusBorderColor="teal.400"
          variant="flushed"
          type="filter"
          name="filter"
          onChange={handleFilter}
        />
      </InputGroup>
    </Box>
  );
};

export default Filter;
