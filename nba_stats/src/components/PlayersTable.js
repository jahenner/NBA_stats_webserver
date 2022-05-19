import React from 'react';
import PlayersRow from './PlayersRow';

function PlayersTable({players}) {
    return (
        <>
            {players.map((player) => <PlayersRow player={player} key={player.player_id}/>)}
        </>
    );
};

export default PlayersTable;