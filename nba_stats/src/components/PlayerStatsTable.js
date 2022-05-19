import React from 'react';
import PlayerStatsRow from './PlayerStatsRow';

function PlayerStatsTable({stats}) {
    return (
        <>
            {stats.map((stat,i) => <PlayerStatsRow stat={stat} key={i}/>)}
        </>
    );
};

export default PlayerStatsTable;