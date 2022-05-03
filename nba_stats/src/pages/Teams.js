import React from 'react';
import TeamsTable from '../components/TeamsTable'

function Teams() {
    return (
        <article>
            <h2>Teams</h2>
            <p>Below is the list of teams in the NBA</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mascot</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <TeamsTable />
                </tbody>
            </table>
        </article>
        
    );
};

export default Teams;