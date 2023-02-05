import { useCallback } from "react";
import useCards from "./../hooks/useCards";
import { useEffect } from "react";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";

const FavCardsPage = () => {
  const { value, ...rest } = useCards();
  const { isPending, error, cards } = value;
  const { handleDeleteCard, handleGetFavCard } = rest;

  useEffect(() => {
    handleGetFavCard();
  }, []);

  const onDeleteCard = useCallback(
    async (cardId) => {
      await handleDeleteCard(cardId);
      await handleGetFavCard();
    },
    [handleDeleteCard]
  );

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavCard();
  }, []);

  return (
    <Container>
      <PageHeader
        title="Favorite Cards Page"
        subtitle="Here you can find all your favorite business cards"
      />

      <CardsFeedback
        isPending={isPending}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
        onLike={changeLikeStatus}
      />
    </Container>
  );
};

export default FavCardsPage;
