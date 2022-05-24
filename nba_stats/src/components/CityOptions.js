import React from "react";
import CityOptionsRow from './CityOptionsRow'

function CityOptions({cities}) {
    return (
        <>
        {/* Loop through all cities */}
            <option value="0">&nbsp;</option>
            {cities.map((city) => <CityOptionsRow city={city} key={city.city_id} />)}
        </>
        
    );
};

export default CityOptions;