import React from "react";
import { Card } from "../component/card";



import "../../styles/home.css";

export const Home = () => (
	<div className="container text-center">
		<div className="row">
			<div className="col">
				<Card 
					ruta="/personajes/" 
					titulo="Personajes"
					descripcion="Aqui Puedes ver Todos los Personajes"
					boton="Ver+"
					/>
			</div>

			<div className="col">
				<Card 
					ruta="/planetas/"
					titulo="Planetas"
					descripcion="Aqui Puedes ver Todos los Planetas"
					boton="Ver+"/>
					
			</div>

			<div className="col">
				<Card 
					ruta="/naves/" 
					titulo="Naves"
					descripcion="Aqui Puedes ver Todas las Naves"
					boton="Ver+"/>
			</div>
		</div>

		

	</div>

);