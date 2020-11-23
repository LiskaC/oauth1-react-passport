import React from "react";
import BackButton from "../../Components/BackButton";

function MapPage(props) {
    return(
        <div>
            <h2>This is a map</h2>

 
      <BackButton history={props.history} />
        </div>
    )
};

export default MapPage;