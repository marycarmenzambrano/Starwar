import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar- bg-dark mb-3">
			<Link to="/">
				<button className="btn btn-secondary m-3">Home</button>
			</Link>
			
			
			<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" width="300x" height="100px"></img>


			<div className="ml-auto">
				<div class="btn-group dropstart">
						<button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos  ❤️
						</button>
						<ul class="dropdown-menu">
							{store.favoritos.map((value,index)=>{
								return (<li key={index} className="dropdown-item">{value} 
								<button className="btn btn-secondary m-3"
								  onClick={()=>{ actions.deleteFav(index);
								  }}>🗑️</button> </li>)
							})}
						</ul>
					</div>
			</div>
		</nav>
	);
};
