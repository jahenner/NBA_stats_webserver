import React from "react";
import { MdDeleteForever, MdEditNote } from "react-icons/md";

function TeamsRow({team, setTeam}) {
    return (
        <tr>
            <td>
                {team.name}
            </td>
            <td>
                {team.mascot}
            </td>
            <td>
                {team.location}
            </td>
            <td><MdEditNote onClick={() => setTeam(team)} /></td>
        </tr>
        
    );
};

export default TeamsRow;