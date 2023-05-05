import React,{ useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; 

 
export const Card = (props) => {
    return ( 
      <div className="card">
        
        <div className="card-body">
          <img src="https://cdn.pocket-lint.com/r/s/970x/assets/images/147767-tv-feature-what-order-should-you-watch-all-the-star-wars-films-image1-1wdfjceytb.jpg"
          width={"300"} />
          <h1 className="card-title"> {props.titulo} </h1>
          <p className="card-text"> {props.descripcion} </p>
          <Link to = {props.ruta} >
            <a className="btn btn-info"> {props.boton} </a>
          </Link>
        </div>
      </div>
  )
};



export const ListadoCard = (props) => {
  const { actions } = useContext(Context)
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="https://es.rollingstone.com/wp-content/uploads/2021/05/20-perosnajes-star-wars.jpg" className="card-img-top"/>
            <div className="card-body">
                <h2 className="card-title">{props.titulo} </h2>
                <Link to={props.ruta}>  
                  <a className="btn btn-secondary" onClick={props.action}>Ver detalle</a> 
                </Link>
                <button className="btn btn-dark" onClick={()=>{
                  actions.addFav(props.titulo)
                }}>{props.favorito}</button>
            </div>
        </div>    
    )
}




export const DetalleCard = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h1>{props.nombre}</h1>
            </div>
        </div>
    )
}
