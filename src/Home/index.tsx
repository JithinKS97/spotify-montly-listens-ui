import { Box } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { searchArtist } from "./api/artist";
import Artists from "./Artists";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [artists, setArtists] = useState([]);

  const onKeyWordChange = (e: any) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    searchArtist(searchTerm).then((res: any) => {
      setArtists(res.artists.items);
    });
  };

  return (
    <>
      <Box bg="lightgrey" w="100vw">
        <Box bg="white" p="10" m="auto" minH="100vh" w="80%">
          <SearchBar onSearchPress={handleSearch} onChange={onKeyWordChange} />
          <Artists artists={artists} />
        </Box>
      </Box>
    </>
  );
}

export default Home;
