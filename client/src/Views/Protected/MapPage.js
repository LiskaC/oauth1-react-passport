import React, { useContext, useState } from "react";
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import {UserContext} from "../../Contexts/UserContext";
import { Link } from "react-router-dom";
import BackButton from "../../Components/BackButton";
import { logout } from "../../Utils/axios-calls";

function MapPage(props) {
    const {user, setUser} = useContext(UserContext);
    const [viewport, setViewport] = useState({
        latitude: 43.6532,
    longitude: -79.3832,
    width: '100vw',
    height: '100vh',
    zoom: 10,
    position: "center" 
    })

    return(
        <div>
            <h2>This is a map</h2>

    <BackButton history={props.history} />
    <div>
            
            <h2> Hi </h2>
            <div>
    <pre>{JSON.stringify(user.coordinates, null, 2)}</pre>
        
        { user ? <button onClick={() => {
            //calls logout function
            setUser(null);
            logout();
        }}>Logout</button>
             : null}
             </div>
    </div>

    <ReactMapGL {...viewport}
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} >
        markers here
    </ReactMapGL>

    <Link className="Link" to="/chats">Chats</Link>
    <Link className="Link" to="/charger">Charger</Link>
        </div>
    )
};

export default MapPage;