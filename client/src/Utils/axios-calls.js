import axios from "axios";

export const logout = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:5000/auth/logout",
    }).then((res) => {
      console.log(res.data)
      console.log("logged out")
    })
    .catch((err) => console.log(err));
  };

  export const getUser = (hook) => {
  axios({
    method: "get",
    withCredentials: true,
    url: "http://localhost:5000/auth/user",
  }).then((res) => {
    hook(res.data)
    console.log( "getUser res. data" + res.data)
  })
  .catch((err) => console.log(err));
};

export const login = (loginUsername, loginPassword) => {
axios({
  method: "post",
  data: {
    username: loginUsername,
    password: loginPassword,
  },
  withCredentials: true,
  url: "http://localhost:5000/auth/login",
}).then((res) => {
  console.log(res.data)
})
.catch((err) => console.log(err));
};

//GET
export const enter = (hook, user, props) => {console.log("Clicked get Enter button")
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:5000/auth/user",
    }).then((res) => {
      hook(res.data);
      user ? props.history.push("/map") : console.log("No logged-in user");
    })
    .catch((err) => console.log(err));
  };