import React from "react";
import { MdDeleteForever, MdEditNote, MdOutlineDelete } from "react-icons/md";


function GamesRow({game, onDelete, setGame}) {
    return (
        <>
        <tr>
            <td>
                {game.date}
            </td>
            <td>
                {game.home_team}
            </td>
            <td>
                {game.away_team}
            </td>
            <td>
                {game.home_team_score}
            </td>
            <td>
                {game.away_team_score}
            </td>
            <td><MdEditNote onClick={() => setGame(game)} /></td>
            <td><MdDeleteForever onClick={() => onDelete(game.game_id) } /></td>
            </tr>
        </>
        
    );
};

export default GamesRow;

// onDelete(game.game_id)