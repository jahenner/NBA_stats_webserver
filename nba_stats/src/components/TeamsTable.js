import React from 'react';
import TeamsRow from './TeamsRow';

function TeamsTable({teams, setTeam}) {
    return (
        <>
            {teams.map((team) => <TeamsRow team={team} setTeam={setTeam} key={team.team_id}/>)}
        </>
    );
};

export default TeamsTable;