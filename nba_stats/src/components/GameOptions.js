import React from "react";
import GameOptionsRow from './GameOptionsRow'

function GameOptions() {
    return (
        <>
        {/* Loop through all games */}
            <option value="0">&nbsp;</option>
            <GameOptionsRow />
        </>
        
    );
};

export default GameOptions;