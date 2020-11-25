import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from "../Contexts/UserContext";

//make a service - put in another file


export default function PrivateRoute({ component: Component, ...rest }) {
    const {user} = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={( props ) => {
        return user ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }}
    />

  )
}