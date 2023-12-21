"use client";

import React from "react";
import SelectLabels from "../SelectButton";
import { Box, Button, TextField, Typography } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import Bottomborder from "../Bottomborder";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <div className="h-full flex justify-around w-full bg-[rgb(0 0 0 / 40%)]">
        <Box
          sx={{
            width: {
              xs: "6rem",
              sm: "8rem",
              md: "10rem",
              lg: "10rem",
            },
          }}
        >
          <img src="./assets/logo.png" />
        </Box>
        <div>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              gap: {
                xs: 1,
                sm: 1,
                md: 3,
                lg: 3,
              },
            }}
          >
            <SelectLabels />
            <Button
              onClick={() => router.push("/register")}
              sx={styles.signinButton}
            >
              Sign In
            </Button>
          </Box>
        </div>
      </div>
      <Box
        sx={{
          width: "100%",
          margin: "auto",
        }}
      >
        <Typography variant="h1" sx={styles.priceText}>
          Enjoy big movies, hit series and more from ₹149.
        </Typography>
        <Typography variant="h3" sx={styles.cancelText}>
          Join today. Cancel anytime.
        </Typography>
        <Typography variant="h3" sx={styles.formText}>
          Ready to watch? Enter your email to create or restart your membership.
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
      <Bottomborder pos />
    </>
  );
};

export default Header;

const styles = {
  signinButton: {
    alignSelf: "center",
    color: "white",
    borderColor: "white",
    textTransform: "capitalize",
    fontweight: "bold",
    height: {
      xs: "2rem",
      sm: "2rem",
      md: "2rem",
      lg: "2rem",
    },
    padding: "0 1rem",
    bgcolor: "#e50914 !important",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "#e50914",
    },
  },
  priceText: {
    color: "white",
    fontSize: {
      xs: "1rem",
      sm: "1.3rem",
      md: "2.5rem",
      lg: "3rem",
    },
    fontWeight: "900",
    textAlign: "center",
  },
  cancelText: {
    color: "white",
    fontSize: {
      xs: "1rem",
      sm: "1rem",
      md: "1rem",
      lg: "1.5rem",
    },
    fontWeight: "400",
    textAlign: "center",
    marginTop: "1rem",
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
  emailText: {
    width: "100%",
    border: "1px solid #616060",
    color: "white",
    bgcolor: "#131415bf",
    borderRadius: 1,
    fontSize: {
      xs: "0.5rem",
      sm: "0.8rem",
      md: "1rem",
      lg: "1rem",
    },
    fontWeight: "400",
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
      sm: "3.5rem",
      md: "3.5rem",
      lg: "3.5rem",
    },
    width: "50%",
    borderRadius: 1,
    marginTop: {
      xs: "2rem",
      sm: "0rem",
      md: "0rem",
      lg: "0rem",
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
};
