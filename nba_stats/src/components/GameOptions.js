import React from "react";
import GameOptionsRow from './GameOptionsRow'

function GameOptions({games}) {
    return (
        <>
        {/* Loop through all games */}
            <option value="0">&nbsp;</option>
            {games.map((game) => <GameOptionsRow game={game} key={game.game_id} />)}
        </>
        
    );
};

export default GameOptions;