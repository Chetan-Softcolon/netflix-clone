import { Box, Typography } from "@mui/material";
import React from "react";
import Bottomborder from "../Bottomborder";

const Section2 = () => {
  return (
    <>
      <Box sx={styles.main}>
        <Box sx={styles.imgDiv}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="download"
          />
          <Box sx={styles.boxDiv}>
            <Box sx={styles.boxImgDiv}>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt=""
                className="h-[4rem]"
              />
              <Box sx={styles.spanDiv}>
                <span style={styles.span1}>Stranger Things</span>
                <span style={styles.span2}>Downloading...</span>
              </Box>
              <Box>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                  alt=""
                  className="h-[2.75em]"
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.parent}>
          <Typography variant="h1" sx={styles.downloadText}>
            Download your shows to watch offline
          </Typography>
          <Typography sx={styles.infoText} variant="h3">
            Save your favourites easily and always have something to watch.
          </Typography>
        </Box>
      </Box>
      <Bottomborder />
    </>
  );
};

export default Section2;

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
    width: "50%",
    margin: "auto",
    paddingRight: "0.375rem",
  },
  downloadText: {
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
    width: {
      xs: "100%",
      sm: "100%",
      md: "100%",
      lg: "100%",
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
    width: {
      xs: "100%",
      sm: "100%",
      md: "50%",
      lg: "40%",
    },
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
  boxImgDiv: {
    border: "1px solid #616060",
    borderRadius: 3,
    display: {
      xs: "none",
      sm: "none",
      md: "flex",
      lg: "flex",
    },
    justifyContent: "center",
    gap: "2rem",
    padding: "0.7rem 1rem",
    background: "#000000",
    marginRight: "4rem",
    width: "50%",
  },

  boxDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: "0",
    left: "0",
  },
  spanDiv: {
    display: "flex",
    flexDirection: "column",
    gap: "0.2em",
    justifyContent: "center",
  },
  span1: {
    fontSize: "0.8rem",
    color: "white",
    fontWeight: "500",
  },
  span2: {
    color: "#0071eb",
    fontSize: "0.875rem",
  },
};
