import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

function HeaderSection(): JSX.Element {
  const backgroundImageUrl = 'url("/images/desktopBackground.jpg")';
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ backgroundImage: backgroundImageUrl, backgroundSize: "cover" }}
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
              Hello, I'm
            </Typography>
            <Typography
              variant="h2"
              color="cyan"
              fontWeight="bold"
              style={{ marginTop: "2rem" }}
            >
              <TypeAnimation
                sequence={[
                  "Timothy Gee",
                  1200,
                  "Software Engineer",
                  1000,
                  "Web Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default HeaderSection;
