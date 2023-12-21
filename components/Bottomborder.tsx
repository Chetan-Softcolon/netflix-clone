import { Box } from "@mui/material";
import React from "react";

interface Props {
  pos?: boolean;
}

const Bottomborder = ({ pos }: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "0.5rem",
        backgroundColor: "rgb(35,35,35)",
        position: pos ? "absolute" : "none",
        bottom: "-0.5rem",
      }}
    />
  );
};

export default Bottomborder;
