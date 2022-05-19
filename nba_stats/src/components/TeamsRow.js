import React from "react";
import { MdDeleteForever, MdEditNote } from "react-icons/md";

function TeamsRow({team}) {
    return (
        <>
            <td>
                {team.name}
            </td>
            <td>
                {team.mascot}
            </td>
            <td>
                {team.location}
            </td>
            <td><MdEditNote onClick={() => console.log("edit")} /></td>
        </>
        
    );
};

export default TeamsRow;