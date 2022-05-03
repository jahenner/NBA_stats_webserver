import React from "react";
import { MdDeleteForever, MdEditNote } from "react-icons/md";

function TeamsRow() {
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
            <td><MdEditNote onClick={() => console.log("edit")} /></td>
        </>
        
    );
};

export default TeamsRow;