import {
  Avatar,
  Box,
  Button,
  Container,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function AboutSection() {
  const theme = useTheme();
  return (
    <Box
      className="about-section"
      minHeight="30vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Container>
        <Typography variant="h5" textAlign="center">
          Raised in Irvine, California. Educated in Computer Science at UC Santa
          Cruz (2017-2021). Current Software Engineer at{" "}
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
      {/* <Container
        sx={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}
      > */}
      {/* <Button
          sx={{
            "&:hover .MuiAvatar-root": {
              borderColor: "white",
              color: "white",
            },
          }}
        >
          <Avatar
            sx={{
              border: "2px solid darkgray",
              color: "darkgray",
              backgroundColor: "transparent",
            }}
          >
            <ArrowDownwardIcon />
          </Avatar>
        </Button> */}
      {/* </Container> */}
    </Box>
  );
}

export default AboutSection;
