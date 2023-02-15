import { useCallback, useState, useMemo } from "react";
import useAxios from "../../hooks/useAxios";
import {
  getCards,
  getMyCards,
  createCard,
  editCard,
  deleteCard,
  changeLikeStatus,
  getCard,
} from "../services/cardApiService";
import { useSnackbar } from "../../providers/SnackbarProvider";
import normalizeCard from "../helper/normalization/normalizeCard";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";

const useCards = () => {
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [isPending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const snack = useSnackbar();
  const { user } = useUser();
  useAxios();

  const requestStatus = (pending, errorMessage, cards, card = null) => {
    setPending(pending);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
    return;
  };

  const handleGetCards = useCallback(async () => {
    try {
      setPending(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
      snack("success", "Cards imported from DB");
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetCard = useCallback(async (cardId) => {
    try {
      setPending(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      return card;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetFavCard = useCallback(async () => {
    try {
      setPending(true);
      const cards = await getCards();
      const favCards = cards.filter(
        (card) => !!card.likes.find((id) => id === user._id)
      );
      requestStatus(false, null, favCards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetMyCards = async () => {
    try {
      setPending(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
      snack("success", "Cards imported from DB");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const value = useMemo(() => {
    return { isPending, cards, card, error };
  }, [isPending, cards, card, error]);

  const handleCreateCard = useCallback(async (cardFromClient) => {
    try {
      setPending(true);
      const normalizedCard = normalizeCard(cardFromClient);
      const card = await createCard(normalizedCard);
      requestStatus(false, null, null, card);
      snack("success", "A new business card has been created");
      Navigate(ROUTES.MY_CARDS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleUpdateCard = useCallback(async (cardId, cardFromClients) => {
    try {
      setPending(true);
      const card = await editCard(cardId, cardFromClients);
      requestStatus(false, null, null, card);
      snack("success", "Card Updated");
      Navigate(ROUTES.MY_CARDS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleDeleteCard = useCallback(async (cardId) => {
    try {
      setPending(true);
      const cards = await deleteCard(cardId);
      requestStatus(false, null, cards);
      snack("success", "Card Deleted");
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleLikeCard = async (cardId) => {
    try {
      const card = await changeLikeStatus(cardId);
      requestStatus(false, null, null, card);
      snack("success", "You like card");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  return {
    value,
    cards,
    isPending,
    error,
    handleGetCards,
    handleGetMyCards,
    handleCreateCard,
    handleUpdateCard,
    handleDeleteCard,
    handleLikeCard,
    handleGetCard,
    handleGetFavCard,
  };
};

export default useCards;
