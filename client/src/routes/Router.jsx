import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import SandBox from "../sandbox/SandBox";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CompLogic from "../sandbox/CompLogic";
import LifeCycleHooks from "../sandbox/life-cycle-hooks/LifeCycleHooks";
import InitialCycle from "../sandbox/life-cycle-hooks/InitialCycle";
import UseStateCycle from "../sandbox/life-cycle-hooks/UseStateCycle";
import UseEffectAsComponentDidMount from "../sandbox/life-cycle-hooks/UseEffectAsComponentDidMount";
import UseEffectasComponentdidUpdate from "../sandbox/life-cycle-hooks/UseEffectasComponentdidUpdate";
import UseEffectAsComponentWillUnmount from "../sandbox/life-cycle-hooks/UseEffectAsComponentWillUnmount";
import UseEffectNoDependancies from "../sandbox/life-cycle-hooks/UseEffectNoDependancies";
import CustomCounterHook from "../sandbox/custom-hooks/CustomCounterHook";
import CustomName from "../sandbox/custom-hooks/CustomName";
import A from "../sandbox/context/secondExe/components/A";
import FormTest from "../sandbox/forms/FormTest";
import MyCardsPage from "../cards/pages/MyCardsPage";
import EditCardPage from "../cards/pages/EditCardPage";
import CreateCardPage from "../cards/pages/CreateCardPage";
import FavCardPage from "../cards/pages/FavCardPage";
import EditUserPage from "../users/pages/EditUserPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />

      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />
      <Route
        path={`${ROUTES.CARD_DETAILS}/:cardId`}
        element={<CardDetailsPage />}
      />
      <Route path={`${ROUTES.EDIT_USER}/:userId`} element={<EditUserPage />} />
      <Route path={`${ROUTES.EDIT_CARD}/:cardId`} element={<EditCardPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavCardPage />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />

      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="logic" element={<CompLogic />} />
        <Route path="life-cycle" element={<LifeCycleHooks />}>
          <Route path="initial" element={<InitialCycle />} />
          <Route path="use-state-cycle" element={<UseStateCycle />} />
          <Route
            path="component-did-mount"
            element={<UseEffectAsComponentDidMount />}
          />
          <Route
            path="component-did-update"
            element={<UseEffectasComponentdidUpdate />}
          />
          <Route
            path="component-will-unmount"
            element={<UseEffectAsComponentWillUnmount />}
          />
          <Route
            path="component-no-dependancies"
            element={<UseEffectNoDependancies />}
          />
        </Route>
        <Route path="custom-counter-hook" element={<CustomCounterHook />} />
        <Route path="custom-name-hook" element={<CustomName />} />
        <Route path="context" element={<A />} />
        <Route path="forms" element={<FormTest />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

Router.propTypes = {};

export default Router;
