import { Box, Grid, Center } from "@chakra-ui/react";

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

  const doesImageExist = artist.images.length > 0;
  let image;
  if (doesImageExist) {
    image = artist.images[0];
  }

  return (
    <>
      <style>{style}</style>
      <Box borderRadius="10%" border="1px solid #aaa" w="300px" h="400px">
        {doesImageExist && (
          <Center mt="10">
            <Box>
              {/* eslint-disable-next-line @next/next/no-img-element*/}
              <img className="image" alt="artist image" src={image.url}></img>
            </Box>
          </Center>
        )}
      </Box>
    </>
  );
};

const style = `
    .image {
        width: 160px;
        height: 160px;
        border-radius: 100%;
    }
`;

export default Artists;
