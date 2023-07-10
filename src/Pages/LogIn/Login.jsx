
/*
Login page that checks the status of a spotify login, and then redirects user to home when completed.
Is accesed using a redirect from a spotify log in attempt.

@params token : string => token given by spotify

*/

import { useEffect, useState } from "react";

const Login = () => {

  //TODO Set this to redux instead of just on page
  const [token, setToken] = useState('');

  useEffect( () => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token);

  }, [])

  return(
    <div className="container">
      Login page.
      
    </div>
  )
}

export default Login;