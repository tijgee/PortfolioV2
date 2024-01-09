import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  IconButton,
  Link,
  MobileStepper,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

import projectData from "../../../public/data/projectData.json";
import React from "react";
import {
  GitHub,
  InsertLink,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";
import { ThemeProvider } from "@emotion/react";
import theme from "@/constants/Theme";

function ProjectsSection() {
  const theme2 = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        minHeight="50vh"
        marginBottom="4rem"
        sx={{ backgroundColor: "black" }}
      >
        <Container>
          <Typography
            variant="h2"
            textAlign="center"
            marginTop="4rem"
            fontWeight="medium"
            color="white"
          >
            Projects
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
          >
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 50,
                pl: 2,
                // bgcolor: "lightblue",
                background: "transparent",
                backgroundImage:
                  "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
                backdropFilter: "blur(7px)",
                boxShadow: "10px 10px 10px rgba(30,30,30,0.5)",
                color: "white",
                marginTop: "3rem",
              }}
            >
              <Typography>{projectData[activeStep].title}</Typography>
            </Paper>

            <SwipeableViews
              axis={theme2.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {projectData.map((step, index) => (
                <div key={step.title}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    // <Box
                    //   component="img"
                    //   sx={{
                    //     maxHeight: "60vh",
                    //     maxWidth: "100%",
                    //     width: "auto",
                    //     height: "auto",
                    //     objectFit: "contain",
                    //   }}
                    //   src={step.path}
                    //   alt={step.title}
                    // />
                    <Card
                      key={index}
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: "black",
                        "&:hover": {
                          "& img": {
                            filter: "blur(8px)",
                          },
                          "& .overlay": {
                            opacity: 1,
                            visibility: "visible",
                          },
                        },
                      }}
                    >
                      <img
                        src={step.path}
                        alt={step.title}
                        style={{
                          width: "100%", // Make the width fill the container
                          maxHeight: "60vh", // Set your desired max height
                          height: "auto",
                          objectFit: "contain",
                          transition: "filter 0.3s ease-in-out",
                        }}
                      />

                      <CardContent
                        className="overlay" // Added a class for easier styling
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          textAlign: "center",
                          color: "white",
                          opacity: 0, // Initially hidden
                          visibility: "hidden", // Initially hidden
                          transition:
                            "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
                          ":hover": {
                            opacity: 1,
                            visibility: "visible",
                          },
                        }}
                      >
                        <Typography variant="h5">{step.title}</Typography>
                        <Typography variant="body2">
                          {step.description}
                        </Typography>
                        <Box marginTop="1rem">
                          <IconButton
                            component={Link}
                            href={step.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: "white",
                              "&:hover": {
                                color: "cyan",
                              },
                            }}
                          >
                            <GitHub />
                          </IconButton>
                          <IconButton
                            component={Link}
                            href={step.websiteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: "white",
                              "&:hover": {
                                color: "cyan",
                              },
                            }}
                          >
                            <InsertLink />
                          </IconButton>
                        </Box>
                      </CardContent>
                    </Card>
                  ) : null}
                </div>
              ))}
            </SwipeableViews>

            <MobileStepper
              steps={projectData.length}
              position="static"
              activeStep={activeStep}
              sx={{
                // backgroundColor: "lightblue",
                background: "transparent",
                backgroundImage:
                  "linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
                backdropFilter: "blur(7px)",
                boxShadow: "10px 10px 10px rgba(30,30,30,0.5)",
                color: "white",
              }}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === projectData.length - 1}
                  sx={{ color: "white" }}
                >
                  Next
                  {theme2.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  sx={{ color: "white" }}
                >
                  {theme2.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default ProjectsSection;
