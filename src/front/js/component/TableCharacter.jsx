import React from "react";

const TableCharacter =(props) => {
    return (
      
      <table className="table border-danger text-warning mt-3 mb-0 mt-2">
  
        <tbody>
          
          <tr>
            <th scope="col">Height</th>
            <th scope="col">Mass</th>
            <th scope="col">Hair Color</th>
            <th scope="col">Skin Color</th>
            <th scope="col">Eye Color</th>
            <th scope="col">Birthday Year</th>
            <th scope="col">Gender</th>
          </tr>

          <tr>
            <td>{props.height}</td>
            <td>{props.mass}</td>
            <td>{props.hair}</td>
            <td>{props.skin}</td>
            <td>{props.eye}</td>
            <td>{props.birth}</td>
            <td>{props.gender}</td>

          </tr>
       
        </tbody>

      </table>
    )
}

export default TableCharacter;