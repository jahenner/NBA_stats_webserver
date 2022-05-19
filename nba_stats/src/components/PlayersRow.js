import React from "react";
import { MdDeleteForever, MdEditNote } from "react-icons/md";

function PlayersRow({player}) {
    return (
        <tr>
            <td>
                {player.first_name}
            </td>
            <td>
                {player.last_name}
            </td>
            <td>
                {player.age}
            </td>
            <td>
                {player.career_points}
            </td>
            <td>
                {player.career_steals}
            </td>
            <td>
                {player.career_blocks}
            </td>
            <td>
                {player.career_rebounds}
            </td>
            <td>
                {player.hometown}
            </td>
            <td>
                {player.curr_team}
            </td>
            <td><MdEditNote onClick={() => console.log("edit")} /></td>
        </tr>
        
    );
};

export default PlayersRow;