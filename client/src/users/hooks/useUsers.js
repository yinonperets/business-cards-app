import { useCallback, useMemo, useState } from "react";
import useAxios from "../../hooks/useAxios";
import {
  editUser,
  getUserFromServer,
  login,
  signup,
} from "../services/userApiService";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useUser } from "../providers/UserProvider.jsx";
import { Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnackbar } from "../../providers/SnackbarProvider";

const useUsers = () => {
  const [users, setUsers] = useState(null);
  const [isPendingg, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();
  const snack = useSnackbar();
  useAxios();

  const requestStatus = useCallback(
    (loading, errorMessage, users, user = null) => {
      setLoading(loading);
      setUsers(users);
      setUser(user);
      setError(errorMessage);
    },
    [setUser]
  );

  const handleLogin = useCallback(async (user) => {
    try {
      const token = await login(user);
      setTokenInLocalStorage(token);
      const userFromLocalStorage = getUser();
      setToken(token);
      requestStatus(false, null, null, userFromLocalStorage);
      navigate(ROUTES.CARDS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [setUser]);

  const handleSignup = useCallback(
    async (userFromClient) => {
      try {
        const normalizedUser = normalizeUser(userFromClient);
        await signup(normalizedUser);
        await handleLogin({
          email: userFromClient.email,
          password: userFromClient.password,
        });
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus, handleLogin]
  );

  const handleUpdateUser = useCallback(async (userId, userFromClients) => {
    try {
      setLoading(true);
      const user = await editUser(userId, userFromClients);
      requestStatus(false, null, null, user);
      snack("success", "user Updated");
      Navigate(ROUTES.MY_CARDS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleGetUser = useCallback(async (userId) => {
    try {
      setLoading(true);
      const user = await getUserFromServer(userId);
      requestStatus(false, null, null, user);
      snack("success", "user imported from DB");
      return user;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const value = useMemo(
    () => ({ isPendingg, error, user, users }),
    [isPendingg, error, user, users]
  );

  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
    handleUpdateUser,
    handleGetUser,
  };
};

export default useUsers;
