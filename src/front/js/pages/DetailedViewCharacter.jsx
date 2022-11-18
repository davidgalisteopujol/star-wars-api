import { objectOf } from "prop-types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableCharacter from "../component/TableCharacter.jsx";
import { getDetailedItem } from "../functions/getDetailedItem.js";

const DetailedViewCharacter = () => {

    const [name, setName] = useState("");
    const [uid, setUid] = useState("");
    const [description, setDescription] = useState("");
    const [height, setHeight] = useState("");
    const [mass, setMass] = useState("");
    const [hair, setHair] = useState("");
    const [skin, setSkin] = useState("");
    const [eye, setEye] = useState("");
    const [birth, setBirth] = useState("");
    const [gender, setGender] = useState("");

    const {id} = useParams()

    useEffect(()=> {
        getDetailedItem("people",`${id}`).then(response => {
            setName(response.result.properties.name);
            setUid(response.result.uid);
            setDescription(response.result.description);
            setHeight(response.result.properties.height);
            setMass(response.result.properties.mass);
            setHair(response.result.properties.hair_color);
            setSkin(response.result.properties.skin_color);
            setEye(response.result.properties.eye_color);
            setBirth(response.result.properties.birth_year);
            setGender(response.result.properties.gender);

        })
    },[])

 
    return (
        <div className="bg-dark text-warning">
           
            <div className="row g-0">

                <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="img-fluid rounded-start" style={{width: "20rem"}}/>
                </div>

                <div className="col-md-8">

                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className="card-text">{description}</p>
                    </div>
                    
                </div>
            </div>

            <TableCharacter height={`${height} cm`} mass={`${mass} kg`} hair={hair} skin={skin} eye={eye} birth={birth} gender={gender}  />

        </div>
    )
}

export default DetailedViewCharacter;