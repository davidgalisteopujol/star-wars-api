import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { useContext, useState } from "react";

const CardStarships = (props) => {

    const {actions} = useContext(Context)
    const [like, setLike] =useState(false)

    const handleClick = () => {
        setLike(!like)
    }
    
    useEffect(()=>{
        if(like) {
            actions.addFavorites(props.title)
        }else {
            actions.deleteFavorites(props.title)
        }
    },[like])


    return (
        
        <div className="card ms-4 mt-3" style={{width: "17rem"}}> 
            <img className="card-img-top" src={props.url} alt="Card image cap" /> 
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`/starships/${props.uid}`} className="btn btn-outline-primary">{props.buttonLabel}</Link>
                    <button type="button" value={props.title} name={props.title} className="btn btn-outline-warning ml-3" onClick= { handleClick } >{like ? "💛" : "🤍"}</button>
                </div>            
            </div>
        </div>
    )
}

export default CardStarships;