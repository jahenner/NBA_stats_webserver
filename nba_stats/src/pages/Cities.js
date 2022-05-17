import React from 'react';
import { useState, useEffect } from 'react';
import CitiesTable from '../components/CitiesTable'

function Cities() {
    const [cities, setCities] = useState([]);

    const loadCities = async () => {
        console.log("starting fetch");
        const response = await fetch('/GetCities');
        console.log("got response")
        const cities = await response.json();
        console.log("getting results")
        setCities(cities);
    };

    useEffect(() => {
        loadCities();
    }, []);

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
                    <CitiesTable cities={cities}/>
                </tbody>
            </table>
            <form id="addCities">
                <legend><strong>Add City</strong></legend>
                <fieldset className="fields">
                    <label> Name </label> <input type="text" name="name" />
                    <label> Population </label> <input type="number" name="population" />
                </fieldset>
                <input className="btn" type="submit" id="addCities" value="Add a City"></input>
                <input className="btn" type="button" value="cancel"></input>
            </form>
            <form id="editCities">
                <legend><strong>Edit City (use the edit icon next to the City you would like to edit)</strong></legend>
                <fieldset className="fields">
                    <label> Name </label> <input type="text" name="name" />
                    <label> Population </label> <input type="number" name="population" />
                </fieldset>
                <input className="btn" type="submit" id="editCities" value="Edit a City"></input>
                <input className="btn" type="button" value="cancel"></input>
            </form>
        </article>
        
    );
};

export default Cities;