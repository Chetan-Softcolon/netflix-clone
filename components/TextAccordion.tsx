import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { AiOutlinePlus } from "react-icons/ai";

interface Props {
  text: string;
  details: string;
}

const TextAccordion = ({ text, details }: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "none !important",
      }}
    >
      <Accordion
        sx={{
          backgroundColor: "#2d2d2d",
          borderRadius: "none !important",
          color: "white",
          padding: "0.55rem 0.55rem",
          width: "100%",
          maxWidth: {
            xs: "20rem",
            sm: "40rem",
            md: "60rem",
            lg: "70rem",
          },
        }}
      >
        <AccordionSummary
          expandIcon={
            <AiOutlinePlus
              style={{
                height: "36px",
                width: "36px",
                color: "white",
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "24px",
                lg: "24px",
              },
              color: "white",
            }}
          >
            {text}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{details}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default TextAccordion;
