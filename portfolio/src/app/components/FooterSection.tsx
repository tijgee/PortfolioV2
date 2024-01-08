import { Copyright, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Container, Divider, Link, Typography } from "@mui/material";

function FooterSection() {
  const currentYear = new Date().getUTCFullYear();
  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: ".5rem",
        }}
      >
        <Link
          href="https://www.linkedin.com/in/timgee/"
          target="blank"
          sx={{ color: "white" }}
        >
          <LinkedIn sx={{ fontSize: "2rem" }} />
        </Link>
        <Link
          href="https://github.com/tijgee"
          target="blank"
          sx={{ color: "white" }}
        >
          <GitHub sx={{ fontSize: "2rem" }} />
        </Link>
      </Container>
      <Container
        sx={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          color: "gray",
        }}
      >
        <Copyright />
        <Typography>Timothy Gee {currentYear}</Typography>
      </Container>
    </Box>
  );
}

export default FooterSection;
