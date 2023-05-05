import React, {useContext} from "react";
import { ListadoCard } from "../component/card";
import { Context } from "../store/appContext";



export const Planetas = () => {
    const {store,actions} = useContext(Context);
    return <div className="container text-center">
    <h1>LISTADO DE PLANETAS SW</h1>
    <div className="row">
       {store.planetas.map((object,index)=>{
            return <ListadoCard 
                        titulo = {object.name}
                        uid = {object.uid}
                        ruta = {"/planetas/"+object.uid}
                        key = {index}
                        favorito="🖤"
                    />
       } )}
            
            
    </div>
</div>
}