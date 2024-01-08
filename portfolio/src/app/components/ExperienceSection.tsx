import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Link,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import experienceData from "../../../public/data/experienceData.json";

function ExperienceSection(): JSX.Element {
  const backgroundImageUrl = 'url("/images/projectBackground.jpg")';

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
    <Box
      className="experience-section"
      minHeight="60vh"
      style={{
        backgroundImage: backgroundImageUrl,
        backgroundSize: "cover",
        backgroundPosition: `center ${scrollPosition * 0.5}px`,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          color="white"
          marginTop="3rem"
          textAlign="center"
        >
          Experience
        </Typography>
        <Grid2
          container
          spacing={4}
          justifyContent="center"
          marginTop="4rem"
          marginBottom="4rem"
        >
          {experienceData.map((experience, index) => (
            <Grid2 key={index} xs={12} sm={6} md={3} lg={3}>
              <Link
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <Card
                  sx={{
                    height: "100%",

                    padding: "1rem",
                    // backgroundColor: experience.color,
                    background: "transparent",
                    backgroundImage:
                      "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
                    backdropFilter: "blur(7px)",
                    boxShadow: "10px 10px 10px rgba(30,30,30,0.5)",
                    borderRadius: 4,
                    transition: "transform 0.3s ease-in-out",
                    ":hover": { transform: "scale(1.05)" },
                    margin: "0px auto",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      textAlign: "left",
                    }}
                  >
                    <Typography variant="h5" color="white">
                      {experience.jobTitle.replace(" ", "\u00A0\n")}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="white"
                      marginTop="1rem"
                    >
                      {experience.company}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="white"
                      marginTop="1rem"
                    >
                      {experience.year}
                    </Typography>
                    <Typography variant="body1" color="white" marginTop="1rem">
                      {experience.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

export default ExperienceSection;
