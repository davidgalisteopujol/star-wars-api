import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";


const FavoritesButton = () => {

    const {store,actions} = useContext(Context)
    const [favorites, setFavorites] = useState(store.favorites)

    useEffect(() => {
        setFavorites(store.favorites)
    },[store.favorites])

    return (

        <div className="dropdown">

            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites<span className="badge bg-secondary">{store.favorites.length}</span>
            </button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                favorites.map((favorite,index) => <li key={index} onClick={() => actions.deleteFavorites(index)}><a className="dropdown-item" href="#" >{favorite}<i className="fas fa-trash-alt" ></i></a></li>)
                }        
            </ul>
        </div>
    )
}

export default FavoritesButton;