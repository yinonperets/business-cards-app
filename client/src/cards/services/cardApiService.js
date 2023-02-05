import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const getCards = async () => {
  try {
    const { data } = await axios.get(`${apiURL}/cards`);
    return data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message);
  }
};

export const getCard = async (cardId) => {
  try {
    const { data } = await axios.get(`${apiURL}/cards/${cardId}`);
    return data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message);
  }
};

export const getMyCards = async () => {
  try {
    const { data } = await axios.get(`${apiURL}/cards/my-cards`);

    return data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message);
  }
};

export const createCard = async (card) => {
  try {
    const { data } = await axios.post(`${apiURL}/cards/`, card);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const editCard = async (cardId, normalaizedCard) => {
  try {
    const { data } = await axios.put(
      `${apiURL}/cards/${cardId}`,
      normalaizedCard
    );
    return data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message);
  }
};

export const changeLikeStatus = async (cardId) => {
  try {
    const { data } = await axios.patch(`${apiURL}/cards/${cardId}`);
    return data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message);
  }
};

export const deleteCard = async (cardId) => {
  try {
    const { data } = await axios.delete(`${apiURL}/cards/${cardId}`);
    return data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message);
  }
};
