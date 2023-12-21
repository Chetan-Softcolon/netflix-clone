import { Box, Typography } from "@mui/material";
import React from "react";
import Bottomborder from "../Bottomborder";

const Section3 = () => {
  return (
    <>
      <Box sx={styles.main}>
        <Box sx={styles.parent}>
          <Typography variant="h1" sx={styles.tvText}>
            Watch everywhere
          </Typography>
          <Typography sx={styles.infoText} variant="h3">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </Typography>
        </Box>
        <Box sx={styles.imgDiv}>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
          <Box sx={styles.videoDiv}>
            <video
              style={{
                display: "inline-block",
                verticalAlign: "baseline",
                objectFit: "contain",
              }}
              data-uia="nmhp-card-animation-asset-video"
              autoPlay
              muted
              loop
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
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

export default Section3;

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
    position: "relative",
  },
  videoDiv: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: -1,
    maxWidth: "63%",
    maxHeight: "47%",
    position: "absolute",
    top: "34%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};
