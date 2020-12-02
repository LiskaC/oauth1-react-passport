import React, { useContext, useState } from "react";
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import {UserContext} from "../../Contexts/UserContext";
import axios from "axios";
import { logout } from "../../Utils/axios-calls";
import marker from "../../Assets/marker.png";
import { Link } from "react-router-dom";
import BackButton from "../../Components/BackButton";
import Button from "../../Components/Button";
import "../../Styles/Marker.css";
import "../../Styles/Link.css"

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
    const [selectedCharger, setSelectedCharger] = useState(null);
    const [chargers, setChargers] = useState(null);


    const getMarkers = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:5000/retrieve/markers",
    }).then((res) => {
      setChargers(res.data)
    })
    .catch((err) => console.log(err));
  };



    return(
        <div>
            <h2>This is a map</h2>


            <Button handleClick={getMarkers} buttonText={"Get Markers"} />

            <BackButton history={props.history} />


            <Link className="Link" to="/chats">Chats</Link>
            <Link className="Link" to="/charger">Charger</Link>
    <div>
            
            <h2> Hi </h2>
            <div>
    <pre>{JSON.stringify(user.coordinates, null, 2)}</pre>
    { chargers ? <pre>{JSON.stringify(chargers.coordinates, null, 2)}</pre> : null}
        
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

{ chargers !=null ? 

chargers.map((charger) => {
         return <Marker 
         key={[charger._id]}
         latitude={charger.coordinates.latitude}
         longitude={charger.coordinates.longitude}
         >
             <button className="marker-btn" onClick={(e) => {
                 e.preventDefault();
                setSelectedCharger(charger)
             }}>
            <img src={marker} alt="charger" />
            </button>
            </Marker>
        })
        : console.log("failed to map chargers")}



{selectedCharger ? (
            <Popup
            latitude={selectedCharger.coordinates.latitude}
            longitude={selectedCharger.coordinates.longitude} 
            offsetTop={-25}
            offsetLeft={30}
            onClose={() => {
                setSelectedCharger(null)
            }}
             >
                <div>
                Charger
  <p>latitude: {selectedCharger.coordinates.latitude}</p>
  <p>longitude: {selectedCharger.coordinates.longitude}</p>
                </div>
            </Popup>
        ) : null}
        




    </ReactMapGL>
        </div>
    )
};

export default MapPage;