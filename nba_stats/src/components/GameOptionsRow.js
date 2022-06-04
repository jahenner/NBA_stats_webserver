import React from "react";


function GameOptionsRow({game}) {
    return (
        // update value to id of game
        <option value={game.game_id}>{game.date}: {game.home_team} vs {game.away_team}</option>
        
    );
};

export default GameOptionsRow;