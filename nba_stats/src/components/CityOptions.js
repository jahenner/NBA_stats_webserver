import React from "react";
import CityOptionsRow from './CityOptionsRow'

function CityOptions() {
    return (
        <>
        {/* Loop through all cities */}
            <option value="0">&nbsp;</option>
            <CityOptionsRow />
        </>
        
    );
};

export default CityOptions;