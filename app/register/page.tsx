"use client";

import SignUpFooter from "@/components/Pages/SignUpFooter";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const Register = () => {
  const router = useRouter();
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const handleLearnMoreClick = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  return (
    <div className="relative w-full bg-cover bg-center bg-no-repeat bg-none md:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
      <main className="image-color flex h-screen flex-col items-center justify-between">
        <div className="h-screen w-full bg-[rgb(0 0 0 / 40%)]">
          <Box sx={styles.imgDiv} onClick={() => router.push("/")}>
            <img src="./assets/logo.png" />
          </Box>
          <Box sx={styles.formParentDiv}>
            <Box sx={styles.formDiv}>
              <Typography
                variant="h4"
                sx={styles.signIn}
                component="div"
                gutterBottom
              >
                Sign In
              </Typography>
              <Box sx={styles.inputDiv}>
                <TextField
                  sx={styles.input}
                  label="Email or phone number"
                  variant="filled"
                />
                <TextField
                  sx={styles.input}
                  label="Password"
                  variant="filled"
                />
                <Button sx={styles.signinButton}>
                  <Typography>Sign In</Typography>
                </Button>
              </Box>
              <Box sx={styles.labelDiv}>
                <FormControlLabel
                  sx={styles.label}
                  control={<Checkbox />}
                  label="Remember me"
                />
                <Link
                  sx={styles.needHelp}
                  href="#"
                  underline="hover"
                  color="white"
                >
                  Need help?
                </Link>
              </Box>
              <Box>
                <Typography sx={styles.newNetflix}>
                  New to Netflix? &nbsp;
                  <Typography
                    variant="caption"
                    sx={styles.signUp}
                    onClick={() => router.push("/")}
                  >
                    Sign up now.
                  </Typography>
                </Typography>
                <Typography sx={styles.bot}>
                  Sign in is protected by Google reCAPTCHA to ensure you’re not
                  a bot &nbsp;
                  <span onClick={handleLearnMoreClick}>
                    <Link href="#">Learn more.</Link>
                  </span>
                </Typography>
                {showAdditionalInfo && (
                  <Typography sx={styles.privacy}>
                    The information collected by Google reCAPTCHA is subject to
                    the Google &nbsp;
                    <Link underline="hover" href="#">
                      Privacy Policy
                    </Link>
                    &nbsp; and &nbsp;
                    <Link underline="hover" href="#">
                      Terms of Service
                    </Link>
                    , and is used for providing, maintaining, and improving the
                    reCAPTCHA service and for general security purposes (it is
                    not used for personalised advertising by Google).
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
          <SignUpFooter />
        </div>
      </main>
    </div>
  );
};

export default Register;

const styles = {
  input: {
    width: "100%",
    border: "none",
    color: "white",
    bgcolor: "#333",
    borderRadius: 2,
    fontSize: "1rem",
    fontWeight: "400",
    "& .MuiFilledInput-input": {
      color: "#B3B3B3",
    },
  },
  signinButton: {
    color: "white",
    borderColor: "white",
    textTransform: "capitalize",
    fontweight: "bold",
    height: "2.8rem",
    width: "100%",
    bgcolor: "#e50914 !important",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "#e50914",
    },
  },
  imgDiv: {
    width: "12rem",
    height: "5rem",
    paddingTop: "1rem",
    cursor: "pointer",
  },
  formParentDiv: {
    padding: {
      xs: "2rem 1rem",
      sm: "2rem 1rem",
      md: "3rem 2rem",
      lg: "3rem 2rem",
    },
    display: "flex",
    width: "100%",
    justifyContent: "center",
    borderRadius: 2,
    margin: "auto",
    backgroundColor: "rgba(0,0,0,.75)",
    height: "100%",
    maxWidth: "450px",
    maxHeight: "660px",
  },
  formDiv: {
    width: "100%",
    maxWidth: {
      xs: "100%",
      sm: "100%",
      md: "100%",
      lg: "100%",
    },
  },
  signIn: {
    color: "white",
    fontWeight: "bold",
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  inputDiv: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "100%",
  },
  labelDiv: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    "& .MuiTypography-root": {
      fontSize: "0.9rem",
      color: "#B3B3B3",
    },
  },
  needHelp: {
    color: "#B3B3B3",
    fontSize: "0.9rem",
  },
  newNetflix: {
    color: "#B3B3B3",
    fontSize: "1rem",
    fontWeight: "400",
    marginTop: "3rem",
  },
  signUp: {
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  bot: {
    color: "#B3B3B3",
    fontSize: "0.8rem",
    fontWeight: "400",
    marginTop: "1rem",
  },
  privacy: {
    color: "#B3B3B3",
    fontSize: "0.8rem",
    fontWeight: "400",
    marginTop: "1rem",
  },
};
