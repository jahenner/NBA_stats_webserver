import React from "react";
import PlayerOptionsRow from './PlayerOptionsRow'

function PlayerOptions() {
    return (
        <>
        {/* Loop through all Players */}
            <option value="0">&nbsp;</option>
            <PlayerOptionsRow />
        </>
        
    );
};

export default PlayerOptions;