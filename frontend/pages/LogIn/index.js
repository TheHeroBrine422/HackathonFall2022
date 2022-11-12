import React from 'react'
import { SiteHeader, Typography } from '../../views/Home/components'
import Link from 'next/link'
import axios from 'axios'

import {useState, useEffect} from 'react';
import DataFetch from "../../DataFetch";
import { render } from 'react-dom';

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

  useEffect(() => {
    if (localStorage.getItem('token')?.length == 128) {
      setToken(localStorage.getItem('token'))
    }
  })

  const login = () => {
      const URLParams = new URLSearchParams();
      URLParams.append("email", username)
      URLParams.append("password", password)

      axios.post(process.env.NEXT_PUBLIC_API_URL+"/plantAPI/login", URLParams)
          .then(function (response) {
              if (response.data.length == 128) {
                localStorage.setItem('token', response.data);
              } 
          })
  }

    const register = () => {
        const URLParams = new URLSearchParams();
        URLParams.append("email", username)
        URLParams.append("password", password)

        axios.post(process.env.NEXT_PUBLIC_API_URL+"/plantAPI/register", URLParams)
            .then(function (response) {
              if (response.data.length == 128) {
                localStorage.setItem('token', response.data);
              } 
            })
    }

    return (
      <>{localStorage == undefined || localStorage.getItem('token') == undefined || localStorage.getItem('token').length != 128 ? (
    <>
    <div>
      <SiteHeader loggedIN={false} />
      <div className='pageContent'>
          <div className='homePortfolio'>
              <Typography classSet={'homeHeadline'}></Typography>
                  <button
                      onClick={register}
                  >
                      <p className='headerLink'>Register</p>
                  </button>
                  <button
                      onClick={login}
                  >
                      <a className='headerLink'>Log In</a>
                  </button>
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
    </>) : (<DataFetch token={token} />)}
    </>
    )
    ;
}



export default LogIn
