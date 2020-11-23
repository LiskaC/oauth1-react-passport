import axios from "axios";

export const logout = () => {console.log("Clicked get User button")
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

  export const getUser = (hook) => {console.log("Clicked get User button")
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