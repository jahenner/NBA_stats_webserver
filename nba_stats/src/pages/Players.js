import React from 'react';
import PlayersTable from '../components/PlayersTable'

function Players() {
    return (
        <article>
            <h2>Players</h2>
            <p>Below is the list of players in the NBA</p>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Career Points</th>
                        <th>Career Steals</th>
                        <th>Career Blocks</th>
                        <th>Career Rebounds</th>
                        <th>Hometown</th>
                        <th>Current Team</th>
                    </tr>
                </thead>
                <tbody>
                    <PlayersTable />
                </tbody>
            </table>
        </article>
        
    );
};

export default Players;