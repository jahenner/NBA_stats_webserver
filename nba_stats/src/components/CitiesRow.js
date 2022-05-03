import React from "react";
import { MdDeleteForever, MdEditNote } from "react-icons/md";

function CitiesRow() {
    return (
        <>
            <td>
                Data
            </td>
            <td>
                Data
            </td>
            <td><MdEditNote onClick={() => console.log("edit")} /></td>
        </>
        
    );
};

export default CitiesRow;