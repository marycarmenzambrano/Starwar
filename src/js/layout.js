import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Planetas } from "./views/planetas";
import { Personajes } from "./views/personajes";
import { Naves } from "./views/naves";
import { DetalleNaves, DetallePlanetas, DetallePersonajes } from "./views/detalles";


import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/personajes" element={<Personajes/>} />
						<Route path="/planetas" element={<Planetas/>} />
						<Route path="/naves" element={<Naves/>} />


						<Route path="/planetas/:id" element={<DetallePlanetas/>} />
						
						<Route path="/personajes/:id" element={<DetallePersonajes/>} />
						
						<Route path="/naves/:id" element={<DetalleNaves/>} />


						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);