import React from "react";

const TableStarship=(props) => {
    return (
      
      <table className="table border-danger text-warning mt-3 mb-0 mt-2">
  
        <tbody>

          <tr>
            <th scope="col">Starship class</th>
            <th scope="col">Manufacturer</th>
            <th scope="col">Cost in credits</th>
            <th scope="col">Length</th>
            <th scope="col">Crew</th>
            <th scope="col">Passengers</th>
            <th scope="col">Max atmosphering speed</th>
            <th scope="col">Hyperdrive Rating</th>
            <th scope="col">MGLT</th>
            <th scope="col">Cargo Capacity</th>
            <th scope="col">Consumables</th>
            
            
          </tr>

          <tr>
            <td>{props.starshipClass}</td>
            <td>{props.manufacturer}</td>
            <td>{props.cost}</td>
            <td>{props.length}</td>
            <td>{props.crew}</td>
            <td>{props.passengers}</td>
            <td>{props.speed}</td>
            <td>{props.hyperdrive}</td>
            <td>{props.mglt}</td>
            <td>{props.cargo}</td>
            <td>{props.consumables}</td>
           
          </tr>

        </tbody>

      </table>
    )
}

export default TableStarship;