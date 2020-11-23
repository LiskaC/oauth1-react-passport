import React, { useContext } from "react";
import {UserContext} from "../../Contexts/UserContext";
import { Link } from "react-router-dom";
import BackButton from "../../Components/BackButton";
import { logout } from "../../Utils/axios-calls";

function MapPage(props) {
    const {user, setUser} = useContext(UserContext);
console.log(props)
    return(
        <div>
            <h2>This is a map</h2>

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
    <Link className="Link" to="/charger">Charger</Link>
        </div>
    )
};

export default MapPage;