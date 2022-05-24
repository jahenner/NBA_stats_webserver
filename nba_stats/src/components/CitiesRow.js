import React from "react";
import { MdDeleteForever, MdEditNote } from "react-icons/md";

function CitiesRow({city, setCity}) {
    console.log(city)
    return (
        <>
        <tr>
            <td>
                {city.name}
            </td>
            <td>
                {city.population}
            </td>
            <td><MdEditNote onClick={() => setCity(city)} /></td>
        </tr>
        </>
        
    );
};

export default CitiesRow;