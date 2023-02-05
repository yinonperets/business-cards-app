import { Container } from "@mui/material";
import React from "react";
import Form from "../../forms/components/Form";
import useForm from "../../forms/hooks/useForm";
import joi from "joi";
import ROUTES from "../../routes/routesModel";
import Input from "../../forms/components/Input";

const FormTest = () => {
  const handleSubmit = (data) => console.log(data);

  const schema = {
    first: joi.string().min(2).required(),
    last: joi.string().min(2).required(),
  };

  const INITIAL_FORM = { first: "", last: "" };

  const { value, ...rest } = useForm(INITIAL_FORM, schema, handleSubmit);
  return (
    <Container
      sx={{
        mt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        title="test form"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        styles={{ maxWidth: "450px" }}
        errors={value.errors}
        onChange={rest.validateForm}
        to={ROUTES.SANDBOX}
      >
        <Input
          label="fitst"
          name="first"
          type="first"
          data={value.data}
          error={value.errors.first}
          onChange={rest.handleChange}
        />
        <Input
          label="last"
          name="last"
          type="last"
          data={value.data}
          error={value.errors.last}
          onChange={rest.handleChange}
        />
      </Form>
    </Container>
  );
};

export default FormTest;
