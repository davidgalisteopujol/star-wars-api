import React from "react";

const TablePlanet=(props) => {
    return (
      
      <table className="table border-danger text-warning mt-3 mb-0 mt-2">
  
        <tbody>

          <tr>
            <th scope="col">Diameter</th>
            <th scope="col">Rotation Period</th>
            <th scope="col">Orbital Period</th>
            <th scope="col">Gravity</th>
            <th scope="col">Population</th>
            <th scope="col">Climate</th>
            <th scope="col">Terrain</th>
            <th scope="col">Surface Water</th>
          </tr>

          <tr>
            <td>{props.diameter}</td>
            <td>{props.rotation}</td>
            <td>{props.orbital}</td>
            <td>{props.gravity}</td>
            <td>{props.population}</td>
            <td>{props.climate}</td>
            <td>{props.terrain}</td>
            <td>{props.surface}</td>
          </tr>

        </tbody>

      </table>
    )
}

export default TablePlanet;