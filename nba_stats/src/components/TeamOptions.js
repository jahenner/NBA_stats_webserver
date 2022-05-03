import React from "react";
import TeamOptionsRow from './TeamOptionsRow'

function TeamOptions() {
    return (
        <>
        {/* Loop through all teams */}
            <option value="0">&nbsp;</option>
            <TeamOptionsRow />
        </>
        
    );
};

export default TeamOptions;