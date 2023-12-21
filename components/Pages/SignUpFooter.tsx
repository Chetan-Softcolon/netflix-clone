import { Box, Link, Typography } from "@mui/material";
import React from "react";
import SelectLabels from "../SelectButton";

const SignUpFooter = () => {
  return (
    <Box sx={styles.mainDiv}>
      <Box sx={styles.textDiv}>
        <Typography
          sx={{
            color: "#737373",
            fontSize: {
              xs: "0.8rem",
              sm: "0.8rem",
              md: "1rem",
              lg: "1rem",
            },
          }}
        >
          Questions? Call &nbsp;
          <Link sx={styles.textColor} href="#">
            000-800-919-1694
          </Link>
        </Typography>
        <Link sx={styles.textColor} href="#">
          FAQ
        </Link>
        <Link sx={styles.textColor} href="#">
          Cookie Preferences
        </Link>
        <SelectLabels />
      </Box>
      <Box sx={styles.textDiv2}>
        <Link sx={styles.textColor} href="#">
          Help Center
        </Link>
        <Link sx={styles.textColor} href="#">
          Corporate Information
        </Link>
      </Box>
      <Box sx={styles.textDiv3}>
        <Link sx={styles.textColor} href="#">
          Terms of Use
        </Link>
      </Box>
      <Box sx={styles.textDiv4}>
        <Link sx={styles.textColor} href="#">
          Privacy
        </Link>
      </Box>
    </Box>
  );
};

export default SignUpFooter;

const styles = {
  textDiv: {
    display: "flex",
    gap: {
      xs: "0.4rem",
      sm: "0.4rem",
      md: "0.6rem",
      lg: "0.6rem",
    },
    flexDirection: "column",
    flexWrap: "wrap",
  },
  textDiv2: {
    display: "flex",
    gap: "0.6rem",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  textDiv3: {
    display: {
      xs: "none",
      sm: "none",
      md: "flex",
      lg: "flex",
    },
    gap: "0.6rem",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  textDiv4: {
    display: {
      xs: "none",
      sm: "none",
      md: "flex",
      lg: "flex",
    },
    gap: "0.4rem",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  mainDiv: {
    padding: {
      xs: "2rem 1rem",
      sm: "3rem 2rem",
      md: "3rem 4rem",
      lg: "3rem 4rem",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: {
      xs: 3,
      sm: 4,
      md: 10,
      lg: 10,
    },
    backgroundColor: "rgba(0,0,0,.75)",
    marginTop: "3rem",
  },
  textColor: {
    textDecoration: "none",
    color: "#737373",
    fontSize: {
      xs: "0.7rem",
      sm: "0.7rem",
      md: "0.8rem",
      lg: "0.8rem",
    },
    "&:hover": {
      textDecoration: "underline",
    },
  },
};
