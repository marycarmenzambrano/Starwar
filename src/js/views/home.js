import React from "react";
import { Card } from "../component/card";



import "../../styles/home.css";

export const Home = () => (
	<div className="container text-center">
		<div className="row">
			<div className="col">
				<Card 
					ruta="/personajes/" 
					titulo="Personajes de la saga"
					descripcion="Aqui podrás revisar toda la info de los personajes"
					boton="Ver+"
					/>
			</div>

			<div className="col">
				<Card 
					ruta="/planetas/"
					titulo="Planetas"
					descripcion="Aqui podrás revisar toda la info de los planetas"
					boton="Ver+"/>
					
			</div>

			<div className="col">
				<Card 
					ruta="/naves/" 
					titulo="Naves espaciales de la saga"
					descripcion="Aqui podrás revisar toda la info de los naves que aparecen en la saga"
					boton="Ver+"/>
			</div>
		</div>

		

	</div>

);