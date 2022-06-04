import React from "react";
import { MdDeleteForever, MdEditNote } from "react-icons/md";

function PlayerStatsRow({stat, onDelete, setStat}) {
    return (
        <tr>
            <td>
                {stat.player_name}
            </td>
            <td>
                {stat.date}
            </td>
            <td>
                {stat.opposing_team}
            </td>
            <td>
                {stat.rebounds}
            </td>
            <td>
                {stat.blocks}
            </td>
            <td>
                {stat.steals}
            </td>
            <td>
                {stat.turnovers}
            </td>
            <td>
                {stat.minutes_played}
            </td>
            <td>
                {stat.started_game}
            </td>
            <td>
                {stat.freethrows_attempt}
            </td>
            <td>
                {stat.freethrows_made}
            </td>
            <td>
                {stat.field_goals_attempt}
            </td>
            <td>
                {stat.field_goals_made}
            </td>
            <td>
                {stat.three_attempt}
            </td>
            <td>
                {stat.three_made}
            </td>
            <td>
                {stat.assists}
            </td>
            <td>
                {stat.fouls}
            </td>
            <td><MdEditNote onClick={() => setStat(stat)} /></td>
            <td><MdDeleteForever onClick={() => onDelete(stat)} /></td>
        </tr>
        
    );
};

export default PlayerStatsRow;