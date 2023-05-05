import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; 

//Esta card será para mostrar personajes y planetas según quiera seleccionar el usuario// 
export const Card = (props) => {
    return ( 
      <div className="card">
        
        <div className="card-body">
          <img src="https://cdn.pocket-lint.com/r/s/970x/assets/images/147767-tv-feature-what-order-should-you-watch-all-the-star-wars-films-image1-1wdfjceytb.jpg"
          width={"300"} />
          <h1 className="card-title"> {props.titulo} </h1>
          <p className="card-text"> {props.descripcion} </p>
          <Link to = {props.ruta} >
            <a className="btn btn-warning"> {props.boton} </a>
          </Link>
        </div>
      </div>
  )
};


//Esta card será para para mostrar varias tarjetas apiladas, como una vista general de //
//personajes y planetas//
export const ListadoCard = (props) => {
  const { actions } = useContext(Context)
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="https://es.rollingstone.com/wp-content/uploads/2021/05/20-perosnajes-star-wars.jpg" className="card-img-top"/>
            <div className="card-body">
                <h2 className="card-title">{props.titulo} </h2>
                <Link to={props.ruta}>  
                  <a className="btn btn-primary" onClick={props.action}>Ver detalle</a> 
                </Link>
                <button className="btn btn-danger" onClick={()=>{
                  actions.addFav(props.titulo)
                }}>{props.favorito}</button>
            </div>
        </div>    
    )
}



//ESTA CARD ES PARA VER EL DETALLE DE CADA PERSONAJE/NAVE/PLANETA

export const DetalleCard = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h1>{props.nombre}</h1>
            </div>
        </div>
    )
}
