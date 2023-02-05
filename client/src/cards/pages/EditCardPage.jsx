import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helper/initialForms/initialCardForm";
import cardSchema from "../models/types/joi-schema/cardSchema";
import normalizeCard from "../helper/normalization/normalizeCard";
import { useEffect } from "react";
import ROUTES from "../../routes/routesModel";
import mapCardToModel from "../helper/mapToModel";
import Input from "../../forms/components/Input";
import { Container } from "@mui/material";
import Form from "../../forms/components/Form";

const EditCardPage = () => {
  const { cardId } = useParams();
  const {
    handleUpdateCard,
    handleGetCard,
    value: { card },
  } = useCards();
  const { user } = useUser();
  const navigate = useNavigate();
  const { value, ...rest } = useForm(initialCardForm, cardSchema, () => {
    handleUpdateCard(card._id, {
      ...normalizeCard({ ...value.data }),
      bizNumber: card.bizNumber,
      user_id: card.user_id,
    });
  });

  useEffect(() => {
    handleGetCard(cardId).then((data) => {
      if (user._id !== data.user_id) return navigate(ROUTES.CARDS);
      const modeledCard = mapCardToModel(data);
      rest.setData(modeledCard);
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
        to={ROUTES.CARDS}
        title="Edit card"
      >
        <Input
          name="title"
          label="title"
          error={value.errors.title}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="subtitle"
          label="subtitle"
          error={value.errors.subtitle}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        />
        <Input
          name="description"
          label="description"
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
          name="webUrl"
          label="web"
          error={value.errors.webUrl}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
          required={false}
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

export default EditCardPage;
