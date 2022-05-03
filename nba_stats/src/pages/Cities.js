import React from 'react';
import CitiesTable from '../components/CitiesTable'

function Cities() {
    return (
        <article>
            <h2>Teams</h2>
            <p>Below is the list of teams in the NBA</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    <CitiesTable />
                </tbody>
            </table>
        </article>
        
    );
};

export default Cities;