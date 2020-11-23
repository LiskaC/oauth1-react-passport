import axios from "axios";

export const logout = () => {console.log("Clicked get User button")
    axios({
      method: "get",
      withCredentials: true,
      url: "http://localhost:5000/auth/logout",
    }).then((res) => {
      console.log("logged out")
    })
    .catch((err) => console.log(err));
  };
