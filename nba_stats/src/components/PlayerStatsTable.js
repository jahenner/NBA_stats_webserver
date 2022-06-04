import React from 'react';
import PlayerStatsRow from './PlayerStatsRow';

function PlayerStatsTable({stats, onDelete, setStat}) {
    return (
        <>
            {stats.map((stat,i) => <PlayerStatsRow stat={stat} onDelete={onDelete} setStat={setStat} key={i}/>)}
        </>
    );
};

export default PlayerStatsTable;