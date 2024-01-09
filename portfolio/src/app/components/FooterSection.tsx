import theme from "@/constants/Theme";
import { ThemeProvider } from "@emotion/react";
import { Copyright, GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Container, CssBaseline, Link, Typography } from "@mui/material";

function FooterSection() {
  const currentYear = new Date().getUTCFullYear();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default FooterSection;
