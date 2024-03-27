import { Route, Routes as RoutesContainer } from "react-router-dom";
import React from "react";
import * as URL from "../src/constants/urls/urlFrontend";
import HomeView from "../src/Accueil/Accueil";
import Access from "./Access";
import Contenu from "./Contenu";
/* import ArtDetails from "../pages/ArtDetails"; */
import Gestion from "../src/Gestion";
import GestionPage from "./GestionPages";

const Routes: React.FC = () => {
    return (
        <RoutesContainer>
            <Route path={URL.URL_HOME} element={<HomeView />} />
            <Route path={URL.URL_LOGIN} element={<Access/>} />
            {/* <Route path={URL.URL_DETAILS_ART} element={<ArtDetails />} /> */}
            <Route path={URL.URL_PROFILE} element={<Gestion/>} />
            <Route path={URL.URL_GESTIONPAGE} element={<GestionPage/>} />
            <Route path={URL.URL_CONTENT} element={<Contenu/>} />
        </RoutesContainer>
    );
};

export default Routes;
