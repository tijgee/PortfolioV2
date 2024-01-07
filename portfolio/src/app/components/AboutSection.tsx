import { Box, Container, Typography } from "@mui/material";

function AboutSection() {
  return (
    <Box height="30vh" display="flex" alignItems="center">
      <Container sx={{ width: "50%" }}>
        <Typography variant="h5" textAlign="left">
          Born and raised in Irvine, California. Educated in Computer Science at
          UC Santa Cruz (2017-2021). Current Software Engineer at NIWC Pacific.
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutSection;
