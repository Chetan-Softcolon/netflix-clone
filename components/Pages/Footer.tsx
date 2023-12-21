import { Box, Link, Typography } from "@mui/material";
import React from "react";
import SelectLabels from "../SelectButton";

const Footer = () => {
  return (
    <Box sx={styles.mainDiv}>
      <Box sx={styles.textDiv}>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
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
          Investor Relations
        </Link>
        <Link sx={styles.textColor} href="#">
          Privacy
        </Link>
        <Link sx={styles.textColor} href="#">
          Speed Test
        </Link>
        <SelectLabels />
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: "0.8rem",
          }}
        >
          Netflix India
        </Typography>
      </Box>
      <Box sx={styles.textDiv2}>
        <Link sx={styles.textColor} href="#">
          Help Center
        </Link>
        <Link sx={styles.textColor} href="#">
          Jobs
        </Link>
        <Link sx={styles.textColor} href="#">
          Cookie Preferences
        </Link>
        <Link sx={styles.textColor} href="#">
          Legal Notices
        </Link>
      </Box>
      <Box sx={styles.textDiv3}>
        <Link sx={styles.textColor} href="#">
          Account
        </Link>
        <Link sx={styles.textColor} href="#">
          Ways to Watch
        </Link>
        <Link sx={styles.textColor} href="#">
          Corporate Information
        </Link>
        <Link sx={styles.textColor} href="#">
          Netflix Originals
        </Link>
      </Box>
      <Box sx={styles.textDiv4}>
        <Link sx={styles.textColor} href="#">
          Media Center
        </Link>
        <Link sx={styles.textColor} href="#">
          Terms of Use
        </Link>
        <Link sx={styles.textColor} href="#">
          Contact Us
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;

const styles = {
  textDiv: {
    display: "flex",
    gap: "0.8rem",
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
      sm: "2rem 2rem",
      md: "4rem 3rem",
      lg: "4rem 4rem",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: {
      xs: 1,
      sm: 3,
      md: 10,
      lg: 10,
    },
  },
  textColor: {
    textDecoration: "underline",
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "0.8rem",
  },
};
