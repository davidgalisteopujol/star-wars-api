import { objectOf } from "prop-types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableStarship from "../component/TableStarship.jsx";
import { getDetailedItem } from "../functions/getDetailedItem.js";

const DetailedViewStarship = () => {

    const [name, setName] = useState("");
    const [uid, setUid] = useState("")
    const [description, setDescription] = useState("");
    const [model, setModel] = useState("");
    const [starshipClass, setStarshipClass] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [cost, setCost] = useState("");
    const [length, setLength] = useState("");
    const [crew, setCrew] = useState("");
    const [passengers, setPassengers] = useState("");
    const [speed, setSpeed] = useState("");
    const [hyperdrive, setHyperdrive] = useState("");
    const [mglt, setMglt] = useState("");
    const [cargo, setCargo] = useState("");
    const [consumables, setConsumables] = useState("");
    
    const {id} = useParams()

    useEffect(()=> {
        getDetailedItem("starships",`${id}`).then(response => {
            setName(response.result.properties.name);
            setUid(response.result.uid)
            setDescription(response.result.description);
            setModel(response.result.properties.model);
            setStarshipClass(response.result.properties.starship_class);
            setManufacturer(response.result.properties.manufacturer);
            setCost(response.result.properties.cost_in_credits);
            setLength(response.result.properties.length);
            setCrew(response.result.properties.crew);
            setPassengers(response.result.properties.passengers);
            setSpeed(response.result.properties.max_atmosphering_speed);
            setHyperdrive(response.result.properties.hyperdrive_rating);
            setMglt(response.result.properties.MGLT);
            setCargo(response.result.properties.cargo_capacity);
            setConsumables(response.result.properties.consumables);
        })
    },[])

 
    return (

        <div className="bg-dark text-warning">
           
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`} className="img-fluid rounded-start" style={{width: "20rem"}}/>
                </div>

                <div className="col-md-8">

                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <h3 className="card-title">{model}</h3>
                        <p className="card-text">{description}</p>
                    </div>
                    
                </div>

            </div>

            <TableStarship starshipClass={starshipClass} manufacturer={manufacturer} cost={cost} length={length} crew={crew} passengers={passengers} speed={speed} hyperdrive={hyperdrive} mglt={mglt} cargo={cargo} consumables={consumables}/>

        </div>
    )
}

export default DetailedViewStarship;