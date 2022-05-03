import React from 'react';
import GamesTable from '../components/GamesTable'

function Games() {
    return (
        <article>
            <h2>Teams</h2>
            <p>Below is the list of teams in the NBA</p>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <GamesTable />
                </tbody>
            </table>
        </article>
        
    );
};

export default Games;