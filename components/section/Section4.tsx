import { Box, Typography } from "@mui/material";
import React from "react";
import Bottomborder from "../Bottomborder";

const Section4 = () => {
  return (
    <>
      <Box sx={styles.main}>
        <Box sx={styles.imgDiv}>
          <img src="https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" />
        </Box>
        <Box sx={styles.parent}>
          <Typography variant="h1" sx={styles.tvText}>
            Create profiles for kids
          </Typography>
          <Typography sx={styles.infoText} variant="h3">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </Typography>
        </Box>
      </Box>
      <Bottomborder />
    </>
  );
};

export default Section4;

const styles = {
  main: {
    width: "100%",
    display: "flex",
    height: "100%",
    padding: {
      xs: "2rem 0rem",
      sm: "2rem 2rem",
      md: "2rem 3rem",
      lg: "2rem 4rem",
    },
    flexDirection: {
      xs: "column-reverse",
      sm: "column-reverse",
      md: "row",
      lg: "row",
    },
  },
  parent: {
    width: "100%",
    margin: "auto",
    paddingRight: "0.375rem",
  },
  tvText: {
    color: "white",
    fontSize: {
      xs: "1.5rem",
      sm: "2rem",
      md: "2.5rem",
      lg: "3rem",
    },
    textAlign: {
      xs: "center",
      sm: "center",
      md: "left",
      lg: "left",
    },
    fontWeight: "900",
  },
  infoText: {
    color: "white",
    fontSize: {
      xs: "1rem",
      sm: "1rem",
      md: "1.5rem",
      lg: "2rem",
    },
    width: {
      xs: "100%",
      sm: "100%",
      md: "100%",
      lg: "100%",
    },
    textAlign: {
      xs: "center",
      sm: "center",
      md: "left",
      lg: "left",
    },
    fontWeight: "400",
    marginTop: "2rem",
  },
  imgDiv: {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
};
