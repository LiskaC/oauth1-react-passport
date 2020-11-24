import React, { useContext, useState } from "react";
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import {UserContext} from "../../Contexts/UserContext";
import { Link } from "react-router-dom";
import * as fireData from "../../Utils/FIRE_FACILITY_WGS84.json";
import marker from "../../Assets/marker.png";
import "../../Styles/Marker.css";
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
    const [selectedMarker, setSelectedMarker] = useState(null);

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
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
    onViewportChange={ viewport => {
        setViewport(viewport);
    }}
    mapStyle="mapbox://styles/liskac/ckhvt8nks0pha1ao31gr6vssl"
    >

        {fireData.default.map((location) => {
         return <Marker 
         key={[location]}
         latitude={[location][0][1]}
         longitude={[location][0][0]}
         offsetTop={-25}
         >
             <button className="marker-btn" onClick={(e) => {
                 e.preventDefault();
                setSelectedMarker(location)
             }}>
            <img src={marker} alt="charger" />
            </button>

            </Marker>
        })}

        {selectedMarker ? (
            <Popup
            latitude={selectedMarker[1]}
            longitude={selectedMarker[0]} 
            offsetTop={-25}
            offsetLeft={30}
            onClose={() => {
                setSelectedMarker(null)
            }}
             >
                <div>
                Charger
  <p>latitude: {selectedMarker[1]}</p>
  <p>longitude: {selectedMarker[0]}</p>
                </div>
            </Popup>
        ) : null}

    </ReactMapGL>

    <Link className="Link" to="/chats">Chats</Link>
    <Link className="Link" to="/charger">Charger</Link>
        </div>
    )
};

export default MapPage;