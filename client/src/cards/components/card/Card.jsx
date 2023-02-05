import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { func } from "prop-types";
import cardType from "../../models/types/cardType";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

function CardComponent({ card, handleDeleteCard, onLike }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 280 }}>
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)}
      >
        {/* Card Head */}
        <CardHead image={card.image} />
        {/* Card Body */}
        <CardBody card={card} />
      </CardActionArea>
      {/* Card Actions */}
      <CardActionBar
        cardId={card._id}
        handleDeleteCard={handleDeleteCard}
        onLike={onLike}
        cardUserId={card.user_id}
        cardLikes={card.likes}
      />
    </Card>
  );
}

CardComponent.propTypes = {
  card: cardType.isRequired,
  handleDeleteCard: func.isRequired,
  onLike: func.isRequired,
};

export default CardComponent;
