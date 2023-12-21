"use client";

import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SelectLabelsProps {
  ma?: boolean;
}

export default function SelectLabels({ ma }: SelectLabelsProps) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl
        sx={{
          m: ma ? 1 : 0,
          minWidth: {
            xs: "60px",
            sm: "80px",
            md: "120px",
            lg: "120px",
          },
          border: "1px solid #616060",
          color: "white",
          bgcolor: "transparent",
          borderRadius: 2,
        }}
        size="small"
      >
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            color: "white",
          }}
        >
          <MenuItem value="">English</MenuItem>
          <MenuItem value={20}>हिन्दी</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
