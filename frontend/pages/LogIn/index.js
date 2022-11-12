import React from 'react'
import { SiteHeader, Typography } from '../../views/Home/components'
import Link from 'next/link'

import {useState} from 'react';

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

    return (<div>
      <SiteHeader />
      <div className='pageContent'>
          <div className='homePortfolio'>
              <Typography classSet={'homeHeadline'}>Login</Typography>
                      <Link 
                          href={"./Home"}
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
    )
}



export default LogIn
