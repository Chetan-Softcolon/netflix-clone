import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import TextAccordion from "../TextAccordion";
import Bottomborder from "../Bottomborder";
import { IoIosArrowForward } from "react-icons/io";

const Section5 = () => {
  return (
    <>
      <Box sx={styles.mainDiv}>
        <Box>
          <Typography variant="h1" sx={styles.text}>
            Frequently Asked Questions
          </Typography>
        </Box>
        <Box sx={styles.accordionDiv}>
          <TextAccordion
            text="What is Netflix?"
            details="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."
          />
          <TextAccordion
            text="How much does Netflix cost?"
            details="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
          />
          <TextAccordion
            text="Where can I watch?"
            details="Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
          />
          <TextAccordion
            text="How do I cancel?"
            details="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
          />
          <TextAccordion
            text="What can I watch on Netflix?"
            details="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
          />
          <TextAccordion
            text="Is Netflix good for kids?"
            details="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."
          />
        </Box>
        <Box
          sx={{
            marginTop: "1.5rem",
          }}
        >
          <Typography variant="h3" sx={styles.formText}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>
          <Box sx={styles.emailDiv}>
            <TextField
              sx={styles.emailText}
              label="Email address"
              variant="filled"
            />
            <Button sx={styles.formButton}>
              <Box sx={styles.formDiv}>
                <Typography sx={styles.buttonText}>Get Started</Typography>
                <IoIosArrowForward style={styles.arrowIcon} />
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
      <Bottomborder />
    </>
  );
};

export default Section5;

const styles = {
  accordionDiv: {
    marginTop: "1.5rem",
    display: "flex",
    flexDirection: "column",
    borderRadius: "none !important",
    gap: "0.35rem",
  },
  mainDiv: {
    padding: {
      xs: "2rem 0rem",
      sm: "2rem 2rem",
      md: "2rem 3rem",
      lg: "2rem 4rem",
    },
  },
  formDiv: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    fontSize: {
      xs: "1.2rem",
      sm: "1.2rem",
      md: "1.5rem",
      lg: "1.5rem",
    },
    fontWeight: "500",
    color: "white",
    textTransform: "none !important",
  },
  arrowIcon: {
    fontSize: "1.5rem",
    fontWeight: "500",
    color: "white",
    textTransform: "none !important",
  },
  formButton: {
    mx: {
      xs: "auto",
      sm: "0.5rem",
      md: "0.5rem",
      lg: "0.5rem",
    },
    backgroundColor: "rgb(229, 9, 20) !important",
    padding: "0.25rem 1rem",
    minHeight: {
      xs: "2.5rem",
      sm: "2.5rem",
      md: "3.5rem",
      lg: "3.5rem",
    },
    width: "50%",
    borderRadius: 1,
    marginTop: {
      xs: "1rem",
      sm: "0rem",
      md: "0rem",
      lg: "0rem",
    },
  },
  emailText: {
    width: "100%",
    border: "1px solid #616060",
    color: "white",
    bgcolor: "#131415bf",
    borderRadius: 1,
    fontSize: "1rem",
    fontWeight: "400",
  },
  emailDiv: {
    display: "flex",
    width: "100%",
    margin: "auto",
    maxWidth: {
      xs: "20rem",
      sm: "30rem",
      md: "40rem",
      lg: "40rem",
    },
    marginTop: "1rem",
    marginBottom: "1rem",
    color: "white",
    flexDirection: {
      xs: "column",
      sm: "row",
      md: "row",
      lg: "row",
    },
  },
  formText: {
    color: "white",
    fontSize: {
      xs: "0.8rem",
      sm: "1rem",
      md: "1rem",
      lg: "1.35rem",
    },
    fontWeight: "400",
    textAlign: "center",
    marginTop: "2rem",
  },
  text: {
    color: "white",
    fontSize: {
      xs: "1.5rem",
      sm: "2rem",
      md: "2.5rem",
      lg: "3rem",
    },
    fontWeight: "900",
    textAlign: "center",
  },
};
