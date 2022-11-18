import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardCharacters from "../component/CardCharacters.jsx";
import CardPlanets from "../component/CardPlanets.jsx";
import CardStarships from "../component/CardStarships.jsx";
import Title from "../component/Title.jsx";

export const Home = () => {

	const { store, actions } = useContext(Context);


	return (
		
		<div className="bg-dark">
   
			<Title title="Characters"/>

			<div className="container-fluidd d-flex flex-wrap justify-content-center">
				{
				store.people.map((character, index) =><CardCharacters key={index} uid={character.uid} title={character.name} url={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} buttonLabel="More details"/>)
				}  
			</div>


			<Title title="Planets"/>

			<div className="container-fluidd d-flex flex-wrap justify-content-center">
				{
				store.planets.map((planet,index) =><CardPlanets key={index} uid={planet.uid} title={planet.name} url={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} description={planet.uid} buttonLabel="More details"/>)
				}
			</div>


			<Title title="Starships"/>

			<div className="container-fluidd d-flex flex-wrap justify-content-center">
				{
				store.starships.map((starship,index) =><CardStarships key={index} uid={starship.uid} title={starship.name} url={`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`} description={starship.uid} buttonLabel="More details"/>)
				}
			</div>

	</div>	
	);
};
