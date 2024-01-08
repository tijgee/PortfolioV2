import {
  Box,
  Button,
  Container,
  MobileStepper,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

import projectData from "../../../public/data/projectData.json";
import React from "react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";

function ProjectsSection() {
  const theme = useTheme();
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
    <Box minHeight="50vh" marginBottom="4rem">
      {" "}
      {/* Adjusted minHeight */}
      <Container>
        <Typography variant="h2" textAlign="center" marginTop="4rem">
          Projects
        </Typography>
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
            marginTop: "4rem",
          }}
        >
          <Typography>{projectData[activeStep].title}</Typography>
        </Paper>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {projectData.map((step, index) => (
            <div key={step.title}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    maxHeight: "60vh",
                    maxWidth: "100%",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  src={step.path}
                  alt={step.title}
                />
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
              {theme.direction === "rtl" ? (
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
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Container>
    </Box>
  );
}

export default ProjectsSection;
