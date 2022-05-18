import React from 'react';
import GamesRow from './GamesRow';

function GamesTable({games, onDelete, setGame}) {
    return (
        <>
            {games.map((game) => <GamesRow game={game} onDelete={onDelete} setGame={setGame} key={games.game_id}/>)}
        </>
    );
};

export default GamesTable;