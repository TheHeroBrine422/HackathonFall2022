import React from 'react'
import { SiteHeader, Typography } from '../../blocks/components'
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

  const [token, setToken] = useState(null);

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
                setToken(response.data)
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
                setToken(response.data)
                localStorage.setItem('token', response.data);
              } 
            })
    }


    console.log(token)
    console.log(token == null)
    return (
      <>{token == undefined ? (
    <>
    <div>
      <SiteHeader loggedIN={false} />
      <div className='pageContent'>
          
    <div  className='inputWrapper'>
      <h2>Email</h2>
      <input
        type="text"
        id="username"
        name="username"
        // className='usernameInput'
        onChange={handleUsername}
        value={username}
      />

      {/* <h2>Username: {username}</h2> */}
    </div>

    <div className='inputWrapper'>
      <h2>Password</h2>
      <input
        type="password"
        id="password"
        name="password"
        // className='passwordInput'
        onChange={handlePassword}
        value={password}
      />

      {/* <h2>Password: {password}</h2> */}
    </div>


    <div className='loginRegister'>
                  <button  className='logInWrapper'
                      onClick={login}
                  >
                      <a className='logIn'>Log In</a>
                  </button>
                  <button className='registerWrapper'
                      onClick={register}
                  >
                      <a className='register'>Register</a>
                  </button>
          </div>

      </div>
  </div>
    </>) : (<DataFetch token={token} />)}
    </>
    )
    ;
}



export default LogIn
