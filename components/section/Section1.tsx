import { Box, Typography } from "@mui/material";
import React from "react";
import Bottomborder from "../Bottomborder";

const Section1 = () => {
  return (
    <>
      <Box sx={styles.main}>
        <Box sx={styles.parent}>
          <Typography variant="h1" sx={styles.tvText}>
            Enjoy on your TV
          </Typography>
          <Typography sx={styles.infoText} variant="h3">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </Typography>
        </Box>
        <Box sx={styles.imgDiv}>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
          <Box sx={styles.videoDiv}>
            <video
              data-uia="nmhp-card-animation-asset-video"
              autoPlay
              muted
              loop
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                type="video/mp4"
              ></source>
            </video>
          </Box>
        </Box>
      </Box>
      <Bottomborder />
    </>
  );
};

export default Section1;

const styles = {
  main: {
    width: "100%",
    display: "flex",
    height: "100%",
    overflow: "hidden",
    padding: {
      xs: "2rem 0rem",
      sm: "2rem 2rem",
      md: "2rem 3rem",
      lg: "2rem 4rem",
    },
    flexDirection: {
      xs: "column",
      sm: "column",
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
    width: {
      xs: "100%",
      sm: "100%",
      md: "100%",
      lg: "100%",
    },
    fontWeight: "900",
    textAlign: {
      xs: "center",
      sm: "center",
      md: "left",
      lg: "left",
    },
  },
  infoText: {
    color: "white",
    fontSize: {
      xs: "1rem",
      sm: "1rem",
      md: "1.5rem",
      lg: "2rem",
    },
    fontWeight: "400",
    marginTop: "2rem",
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
  },
  imgDiv: {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
  videoDiv: {
    width: "100%",
    zIndex: -1,
    position: "absolute",
    top: "49%",
    left: "50%",
    transform: "translate(-40%, -50%)",
  },
};
