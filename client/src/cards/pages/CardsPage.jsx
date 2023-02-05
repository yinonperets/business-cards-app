import { Container } from "@mui/material";
import { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

const CardsPage = () => {
  const { handleGetCards, value, handleDeleteCard } = useCards();
  const { cards, isPending, error } = value;

  useEffect(() => {
    handleGetCards();
  }, []);

  const OnDeleteCard = async (cardId) => {
    await handleDeleteCard(cardId);
    await handleGetCards();
  };
  return (
    <Container>
      <PageHeader
        title="Cards"
        subtitle="Here you can find business cards from all categories"
      />

      <CardsFeedback
        isPending={isPending}
        error={error}
        cards={cards}
        onDelete={OnDeleteCard}
      />
    </Container>
  );
};

export default CardsPage;
