import React from 'react';
import CitiesRow from './CitiesRow';

function CitiesTable({cities, setCity}) {
    return (
        <>
            {cities.map((city) => <CitiesRow city={city} setCity={setCity} key={city.city_id}/>)}
        </>
    );
};

export default CitiesTable;