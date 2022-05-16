import React from "react";
import { MdDeleteForever, MdEditNote } from "react-icons/md";

function CitiesRow({city}) {
    console.log(city)
    return (
        <>
            <td>
                {city.name}
            </td>
            <td>
                {city.population}
            </td>
            <td><MdEditNote onClick={() => console.log("edit")} /></td>
        </>
        
    );
};

export default CitiesRow;