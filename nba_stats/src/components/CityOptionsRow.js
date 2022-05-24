import React from "react";


function CityOptionsRow({city}) {
    return (
        // update value to id of team
        <option value={city.city_id}>{city.name}</option>
        
    );
};

export default CityOptionsRow;