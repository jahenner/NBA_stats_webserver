import React from 'react';
import GamesRow from './GamesRow';

function GamesTable({games, onDelete}) {
    return (
        <>
            {games.map((game) => <GamesRow game={game} onDelete={onDelete}/>)}
        </>
    );
};

export default GamesTable;