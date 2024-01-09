import theme from "@/constants/Theme";
import { ThemeProvider } from "@emotion/react";
import { ArrowDownward } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

function HeaderSection(): JSX.Element {
  const backgroundImageUrl = 'url("/images/desktopBackground.jpg")';
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          backgroundImage: backgroundImageUrl,
          backgroundSize: "cover",
          backgroundPosition: `center ${scrollPosition * 0.5}px`,
        }}
      >
        <Container>
          <Card
            sx={{
              width: "60%",
              height: "30vh",
              background: "transparent",
              backgroundImage:
                "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
              backdropFilter: "blur(7px)",
              boxShadow: "10px 10px 10px rgba(30,30,30,0.5)",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography variant="h2" color="white" fontWeight="medium">
                Timothy Gee
              </Typography>
              <Typography
                variant="h5"
                color="cyan"
                style={{ marginTop: "1rem" }}
              >
                <TypeAnimation
                  sequence={["Software Engineer", 1200, "Web Developer", 1000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default HeaderSection;
