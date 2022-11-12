import React from 'react'
import { SiteHeader, Typography } from '../../views/Home/components'
import Link from 'next/link'
import axios from 'axios'

import {useState} from 'react';
import DataFetch from "../../DataFetch";

const LogIn = ({data}) => {

  const [username, setUsername] = useState('');

  const handleUsername = event => {
    setUsername(event.target.value);

    console.log('value is:', event.target.value);
  };
  const [password, setPassword] = useState('');

  const handlePassword = event => {
    setPassword(event.target.value);

    console.log('value is:', event.target.value);
  };

    const [token, setToken] = useState('');


  const login = () => {
      const URLParams = new URLSearchParams();
      URLParams.append("email", username)
      URLParams.append("password", password)

      axios.post("http://localhost:3000/plantAPI/login", URLParams)
          .then(function (response) {
              if ("invalid") {

              } else {
                  setToken(response.data)
              }
          })
  }

    const register = () => {
        const URLParams = new URLSearchParams();
        URLParams.append("email", username)
        URLParams.append("password", password)

        axios.post("http://localhost:3000/plantAPI/register", URLParams)
            .then(function (response) {
                console.log(response.data);
            })
    }



    return token == null ? (<div>
      <SiteHeader />
      <div className='pageContent'>
          <div className='homePortfolio'>
              <Typography classSet={'homeHeadline'}>Register</Typography>
                  <Link
                      href={"./Home"}
                      onClick={register}
                  >
                      <a className='headerLink'>Login</a>
                  </Link>
                  <Link
                      href={"./Home"}
                      onClick={login}
                  >
                      <a className='headerLink'>Log In</a>
                  </Link>
          </div>
          
    <div>
      <input
        type="text"
        id="username"
        name="username"
        onChange={handleUsername}
        value={username}
      />

      <h2>Username: {username}</h2>
    </div>

    <div>
      <input
        type="text"
        id="password"
        name="password"
        onChange={handlePassword}
        value={password}
      />

      <h2>Password: {password}</h2>
    </div>

      </div>
      {/* <SiteFooter /> */}
  </div>
    ) : (<DataFetch />)
}



export default LogIn
