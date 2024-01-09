import theme from "@/constants/Theme";
import {
  Box,
  Container,
  CssBaseline,
  Link,
  ThemeProvider,
  Typography,
} from "@mui/material";

function AboutSection() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        className="about-section"
        minHeight="30vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "black" }}
      >
        <Container>
          <Typography variant="h5" textAlign="center">
            Raised in Irvine, California. Educated in Computer Science at UC
            Santa Cruz (2017-2021). Current Software Engineer at{" "}
            <Link
              href="https://www.niwcpacific.navy.mil"
              color="cyan"
              underline="hover"
              target="_blank"
            >
              NIWC Pacific
            </Link>
            .
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default AboutSection;
