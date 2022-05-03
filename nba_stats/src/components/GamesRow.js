import React from "react";
import { MdDeleteForever, MdEditNote } from "react-icons/md";


function GamesRow() {
    return (
        <>
            <td>
                Data
            </td>
            <td>
                Data
            </td>
            <td>
                Data
            </td>
            <td>
                Data
            </td>
            <td>
                Data
            </td>
            <td><MdEditNote onClick={() => console.log("edit")} /></td>
            <td><MdDeleteForever onClick={() => console.log("delete")} /></td>
        </>
        
    );
};

export default GamesRow;