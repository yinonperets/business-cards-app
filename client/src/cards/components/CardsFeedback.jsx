import React from "react";
import { arrayOf, bool, func, string } from "prop-types";
import Spinner from "../../components/Spinner";
import { Typography } from "@mui/material";
import CardsComponent from "./Cards";
import Error from "../../components/Error";
import cardType from "../models/types/cardType";

const CardsFeedback = ({ isPending, error, cards, onDelete, onLike }) => {
  if (isPending) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && !cards.length)
    return (
      <Typography>
        Oops.. it seems there are no business cards to display.
      </Typography>
    );
  if (cards && !!cards.length)
    return (
      <CardsComponent
        cards={cards}
        handleDeleteCard={onDelete}
        onLike={onLike}
      />
    );
};

CardsFeedback.propTypes = {
  isPending: bool.isRequired,
  error: string,
  cards: arrayOf(cardType),
  onDelete: func.isRequired,
  onLike: func.isRequired,
};

CardsFeedback.defaultProps = {
  onLike: () => {},
};

export default CardsFeedback;
