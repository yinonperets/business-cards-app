import { Grid } from "@mui/material";
import { arrayOf, func } from "prop-types";
import React from "react";
import cardType from "../models/types/cardType";
import CardComponent from "./card/Card";

const CardsComponent = ({ cards, handleDeleteCard, onLike }) => {
  return (
    <Grid container spacing={2} direction="row" justifyContent="space-between">
      {cards.map((card) => (
        <Grid item xs={12} md={6} xl={4} key={card._id}>
          <CardComponent
            card={card}
            handleDeleteCard={handleDeleteCard}
            onLike={onLike}
          />
        </Grid>
      ))}
    </Grid>
  );
};

CardsComponent.propTypes = {
  cards: arrayOf(cardType).isRequired,
  handleDeleteCard: func.isRequired,
  onLike: func.isRequired,
};

export default CardsComponent;
