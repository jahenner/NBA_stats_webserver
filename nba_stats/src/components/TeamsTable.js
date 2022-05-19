import React from 'react';
import TeamsRow from './TeamsRow';

function TeamsTable({teams}) {
    return (
        <>
            {teams.map((team) => <TeamsRow team={team} key={team.team_id}/>)}
        </>
    );
};

export default TeamsTable;