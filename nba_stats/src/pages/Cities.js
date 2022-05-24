import React from 'react';
import { useState, useEffect } from 'react';
import CitiesTable from '../components/CitiesTable'
import {useHistory} from 'react-router-dom'

function Cities() {
    const history = useHistory();
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState({});
    const [name, setName] = useState("");
    const [population, setPopulation] = useState(0);
    const [editted, setEditted] = useState(0);

    const addCity = async (e) => {
        e.preventDefault()
        const newCity = {name, population}
        console.log(newCity)
        const response = await fetch("/server/addCity", {
            method: 'POST',
            body: JSON.stringify(newCity),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status === 201) {
            alert("Successfully added the city");
            setEditted(editted+1);
            reset();
        } else {
            alert(`Failed to add city, status code = ${response.status}`);
        }
    }

    const editCity = async (e) => {
        console.log(city)
        e.preventDefault()
        const response = await fetch(`/server/UpdateCity/${city.city_id}`, {
            method: 'PUT',
            body: JSON.stringify(city),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status === 201) {
            alert("Successfully edited the city");
            setEditted(editted + 1)
        } else {
            alert(`Failed to edit city, status code = ${response.status}`);
        }
    }

    const loadCities = async () => {
        console.log("starting fetch");
        const response = await fetch('/server/GetCities');
        console.log("got response")
        const cities = await response.json();
        console.log("getting results")
        setCities(cities);
    };

    const reset = () => {
        setName('');
        setPopulation('');
    }

    const resetEdit = () => {
        setCity({});
    }

    useEffect(() => {
        loadCities();
    }, [editted]);

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
                    <CitiesTable cities={cities} setCity={setCity}/>
                </tbody>
            </table>
            <form id="addCities">
                <legend><strong>Add City</strong></legend>
                <fieldset className="fields">
                    <label> Name </label> <input 
                    type="text" 
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                    <label> Population </label> <input 
                    type="number" 
                    name="population"
                    value={population}
                    onChange={e => setPopulation(e.target.value)} />
                </fieldset>
                <input className="btn" type="submit" id="addCities" value="Add a City" onClick={e => addCity(e)}></input>
                <input className="btn" type="button" value="cancel" onClick={reset}></input>
            </form>
            <form id="editCities">
                <legend><strong>Edit City (use the edit icon next to the City you would like to edit)</strong></legend>
                <fieldset className="fields">
                    <label> Name </label> <input 
                    type="text" 
                    name="name"
                    value={city.name}
                    onChange={e => setCity(city => ({...city, name: e.target.value}))} />
                    <label> Population </label> <input 
                    type="number" 
                    name="population"
                    value={city.population}
                    onChange={e => setCity(city => ({...city, population: parseInt(e.target.value)}))} />
                </fieldset>
                <input className="btn" type="submit" id="editCities" value="Edit a City" onClick={e => editCity(e)}></input>
                <input className="btn" type="button" value="cancel" onClick={resetEdit}></input>
            </form>
        </article>
        
    );
};

export default Cities;