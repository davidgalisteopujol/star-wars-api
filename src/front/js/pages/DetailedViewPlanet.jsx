import { objectOf } from "prop-types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TablePlanet from "../component/TablePlanet.jsx";
import { getDetailedItem } from "../functions/getDetailedItem.js";

const DetailedViewPlanet = () => {

    const [name, setName] = useState("");
    const [uid, setUid] = useState("")
    const [description, setDescription] = useState("");
    const [diameter, setDiameter] = useState("");
    const [rotation, setRotation] = useState("");
    const [orbital, setOrbital] = useState("");
    const [gravity, setGravity] = useState("");
    const [population, setPopulation] = useState("");
    const [climate, setClimate] = useState("");
    const [terrain, setTerrain] = useState("");
    const [surface, setSurface] = useState("");

    const {id} = useParams()

    useEffect(()=> {
        getDetailedItem("planets",`${id}`).then(response => {
            setName(response.result.properties.name);
            setUid(response.result.uid)
            setDescription(response.result.description);
            setDiameter(response.result.properties.diameter);
            setRotation(response.result.properties.rotation_period);
            setOrbital(response.result.properties.orbital_period);
            setGravity(response.result.properties.gravity);
            setPopulation(response.result.properties.population);
            setClimate(response.result.properties.climate);
            setTerrain(response.result.properties.terrain);
            setSurface(response.result.properties.surface_water)
        })
    },[])

 
    return (

        <div className="bg-dark text-warning">
           
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} className="img-fluid rounded-start" style={{width: "20rem"}}/>
                </div>

                <div className="col-md-8">

                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text">{description}</p>
                    </div>
                    
                </div>
            </div>

            <TablePlanet diameter={diameter} rotation={rotation} orbital={orbital} gravity={gravity} population={population} climate={climate} terrain={terrain} surface={surface} />

        </div>
    )
}

export default DetailedViewPlanet;