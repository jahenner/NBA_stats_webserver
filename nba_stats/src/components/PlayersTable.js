import React from 'react';
import PlayersRow from './PlayersRow';

function PlayersTable({players, setPlayer}) {
    return (
        <>
            {players.map((player) => <PlayersRow player={player} setPlayer={setPlayer} key={player.player_id}/>)}
        </>
    );
};

export default PlayersTable;