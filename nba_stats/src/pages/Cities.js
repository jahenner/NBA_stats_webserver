import React from 'react';
import CitiesTable from '../components/CitiesTable'

function Cities() {
    return (
        <article>
            <h2>Cities</h2>
            <p>Below is the list of cities where the NBA plays or players grew up.</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Population</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <CitiesTable />
                </tbody>
            </table>
            <form id="addCities">
                <legend><strong>Add City</strong></legend>
                <fieldset class="fields">
                    <label> Name </label> <input type="text" name="name" />
                    <label> Population </label> <input type="number" name="population" />
                </fieldset>
                <input class="btn" type="submit" id="addCities" value="Add a City"></input>
                <input class="btn" type="button" value="cancel"></input>
            </form>
        </article>
        
    );
};

export default Cities;