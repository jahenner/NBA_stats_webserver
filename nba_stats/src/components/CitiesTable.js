import React from 'react';
import CitiesRow from './CitiesRow';

function CitiesTable({cities}) {
    return (
        <>
            {cities.map((city) => <CitiesRow city={city} key={city.city_id}/>)}
        </>
    );
};

export default CitiesTable;