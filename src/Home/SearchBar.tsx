import { Input, InputGroup, Button } from "@chakra-ui/react";

function SearchBar(props: any) {
  const { onChange, onSearchPress } = props;

  return (
    <>
      <InputGroup w="400px" size="md">
        <Input onChange={onChange} placeholder="Enter the artist's name" />
        <Button onClick={onSearchPress} colorScheme="blue" ml="2">
          Search
        </Button>
      </InputGroup>
    </>
  );
}

export default SearchBar;
