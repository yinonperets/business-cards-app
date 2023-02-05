import { Box, Typography } from "@mui/material";
import React from "react";
import ChildPropsObject from "./ChildPropsObject";

const FatherPropsObject = () => {
  const name = {
    first: "yinon",
    last: "perets",
  };
  return (
    <Box m={2}>
      <Typography m={2}>Father Component</Typography>
      <Box
        sx={{
          m: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 300,
          height: 300,
          backgroundColor: "secondary.dark",
        }}
      >
        <ChildPropsObject name={name} />
      </Box>
    </Box>
  );
};

export default FatherPropsObject;
