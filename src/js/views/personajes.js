import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { ListadoCard } from "../component/card";
import { Context } from "../store/appContext";

export const Personajes = () =>{
    const {store,actions} = useContext(Context);
        return <div className="container text-center">
                    <h1>Personajes</h1>
                    <div className="row">
                        {store.personajes.map((object,index)=>{
                             return (<ListadoCard 
                                        titulo={object.name}
                                        uid = {object.uid}
                                        ruta = {"/personajes/"+object.uid}
                                        key={index}
                                        favorito="❤️"
                                        
                                     /> 
                                    
                                     ) 
                      })}
                    
                    </div>
                </div>
}




