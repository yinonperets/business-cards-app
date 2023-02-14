import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import signupSchema from "../models/joi-schema.js/signupSchema";
import useForm from "../../forms/hooks/useForm";
import normalizeUser from "../helpers/normalization/normalizeUser";
import useUsers from "../hooks/useUsers";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import mapUserToModel from "../helpers/normalization/mapUserToModel";

const EditUserPage = () => {
  const { userId } = useParams();
  const {
    handleUpdateUser,
    handleGetUser,
    value: { user },
  } = useUsers();

  const navigate = useNavigate();

  const { value, ...rest } = useForm(initialSignupForm, signupSchema, () => {
    handleUpdateUser(user._id, {
      ...normalizeUser({ ...value.data }),
      bizNumber: user.bizNumber,
      user_id: user._id,
    });
  });

  useEffect(() => {
    handleGetUser(userId).then((data) => {
      if (user._id !== data._id) return navigate(ROUTES.CARDS);
      const modeledUser = mapUserToModel(data);
      rest.setData(modeledUser);
    });
  }, []);

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onChange={rest.validateForm}
        styles={{ maxWidth: "800px" }}
        to={ROUTES.EDIT_USER}
        title="Edit user"
      >
        <Input
          name="first"
          label="first"
          error={value.errors.first}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="middle"
          label="middle"
          error={value.errors.middle}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="last"
          label="last"
          error={value.errors.description}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="phone"
          label="phone"
          type="phone"
          error={value.errors.phone}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="email"
          label="email"
          type="email"
          error={value.errors.email}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="password"
          label="password"
          type="password"
          error={value.errors.password}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="imageUrl"
          label="image url"
          error={value.errors.imageUrl}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
          required={false}
        />
        <Input
          name="imageAlt"
          label="image alt"
          error={value.errors.imageAlt}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
          required={false}
        />
        <Input
          name="state"
          label="state"
          error={value.errors.state}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
          required={false}
        />
        <Input
          name="country"
          label="country"
          error={value.errors.country}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="city"
          label="city"
          error={value.errors.city}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="street"
          label="street"
          error={value.errors.street}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="houseNumber"
          label="houseNumber"
          type="number"
          error={value.errors.houseNumber}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="zip"
          label="zip"
          type="number"
          error={value.errors.zip}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
          required={false}
        />
      </Form>
    </Container>
  );
};

export default EditUserPage;
