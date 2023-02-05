import React, { useEffect } from "react";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/system";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const MyCardsPage = () => {
  const { value, handleGetMyCards } = useCards();
  const { isPending, error, cards } = value;
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    handleGetMyCards();
  }, []);

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container sx={{ position: "relative", minHeight: "92vh" }}>
      <PageHeader
        title="My Cards Page"
        subtitle="Here you can find your business cards"
      />

      {cards && (
        <Fab
          onClick={() => navigate(ROUTES.CREATE_CARD)}
          color="primary"
          aria-label="add"
          sx={{
            position: "absolute",
            bottom: 75,
            right: 16,
          }}
        >
          <AddIcon />
        </Fab>
      )}
      <CardsFeedback
        isPending={isPending}
        error={error}
        cards={cards}
        onDelete={() => {}}
      />
    </Container>
  );
};

export default MyCardsPage;
