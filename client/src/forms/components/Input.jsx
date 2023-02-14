import React from "react";
import { string, bool, object, func } from "prop-types";
import TextField from "@mui/material/TextField";
import { makeFirstLetterCapital } from "../utils/algoMethods";
import Grid from "@mui/material/Grid";

const Input = ({
  variant,
  type,
  name,
  data,
  label,
  required,
  error,
  onChange,
  disabled,
  ...rest
}) => {
  return (
    <Grid item xs={12} {...rest}>
      <TextField
        variant={variant}
        label={makeFirstLetterCapital(label)}
        type={type}
        id={name}
        name={name}
        value={data[name] ? data[name] : ""}
        required={required}
        helperText={error}
        error={Boolean(error)}
        onChange={onChange}
        fullWidth
        autoComplete="off"
        disabled={disabled}
      />
    </Grid>
  );
};

Input.propTypes = {
  name: string.isRequired,
  required: bool.isRequired,
  type: string.isRequired,
  error: string,
  onChange: func.isRequired,
  variant: string,
  data: object,
  disable: bool.isRequired,
};

Input.defaultProps = {
  required: true,
  type: "text",
  variant: "outlined",
  disabled: false,
};

export default React.memo(Input);
