import { Box, Grid } from "@chakra-ui/react";

function Artists(props: any) {
  const { artists } = props;

  console.log(artists);

  return (
    <Box mt="10">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {artists.map((artist: any, index: number) => (
          <Artist artist={artist} key={index} />
        ))}
      </Grid>
    </Box>
  );
}

const Artist = (props: any) => {
  const { artist } = props;

  console.log(artist);

  return (
    <Box borderRadius="10%" border="1px solid #aaa" w="300px" h="400px"></Box>
  );
};

export default Artists;
