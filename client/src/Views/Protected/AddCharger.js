import React, { useContext } from "react";
import {UserContext} from "../../Contexts/UserContext";
import BackButton from "../../Components/BackButton";
import { Link } from "react-router-dom";

function AddChargerPage(props) {
    const {user, setUser} = useContext(UserContext);

    return(
        <div>
            <h2>Add Charger</h2>

<BackButton history={props.history} />
    <div>
            <h2> Hi </h2>
    <pre>{JSON.stringify(user, null, 2)}</pre>
        
        { user ? <button onClick={() => {
            //calls logout function
            setUser(null);
        }}>Logout</button>
             : null}
    </div>
    <Link className="Link" to="/chats">Chats</Link>
    <Link className="Link" to="/map">Map</Link>
        </div>
    )
};

export default AddChargerPage;