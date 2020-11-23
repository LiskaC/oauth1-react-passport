import React, { useContext, useState } from "react";
import {UserContext} from "../../Contexts/UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import BackButton from "../../Components/BackButton";
import Button from "../../Components/Button"
import Input from "../../Components/Input";
import { logout } from "../../Utils/logout";


function AddChargerPage(props) {
    const {user, setUser} = useContext(UserContext);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

       //input edits
       const handleLatitudeInputChange = (e) => {
        setLatitude(e.target.value);
        console.log("latitude: " + latitude);
    }
    const handleLongitudeInputChange = (e) => {
        setLongitude(e.target.value);
        console.log("longitude: " + longitude);
    }

    const addCharger = () => { console.log(latitude, longitude) 
        if (user != null) {

        axios({
            method: "post",
            data: {
              username: user.username,
              latitude: latitude,
              longitude: longitude
            },
            withCredentials: true,
            url: "http://localhost:5000/update/charger",
          }).then((res) => {
            console.log(res.data)
          })
          .catch((err) => console.log(err))
        } else { console.log(user) }
        };


          const getUser = () => {console.log("Clicked get User button")
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:5000/auth/user",
    }).then((res) => {
      setUser(res.data)
      console.log( "getUser res. data" + res.data)
    })
    .catch((err) => console.log(err));
  };

    return(
        <div>
            <h2>Add Charger</h2>
  
            <div>
        <Input placeholder="latitude" onChange={handleLatitudeInputChange} />  
        <Input placeholder="longitude" onChange={handleLongitudeInputChange} />
        <Button handleClick={addCharger} buttonText={"Submit"} />
      </div>

      <h1>Get User</h1>
        <Button handleClick={getUser} buttonText={"Submit"} />

<BackButton history={props.history} />
    <div>
            <h2> Hi </h2>
    <pre>{JSON.stringify(user, null, 2)}</pre>
        
        { user ? <button onClick={() => {
            //calls logout function
            setUser(null);
            logout();
        }}>Logout</button>
             : null}
    </div>
    <Link className="Link" to="/chats">Chats</Link>
    <Link className="Link" to="/map">Map</Link>
        </div>
    )
};

export default AddChargerPage;