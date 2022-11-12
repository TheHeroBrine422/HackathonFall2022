import React, { useCallback } from 'react'
import { SiteHeader, Typography } from '../../blocks/components'
import { useEffect, useState } from 'react'
import {Grid } from '../../blocks/components'
import axios from 'axios'

const Plants = ({data, getData}) => {
  
  const [plantData, setPlantData] = useState({});

  useEffect(() => {
    setPlantData(data[typeof window !== 'undefined' ? localStorage.getItem('activePlant') : null])
  })

  function editPlant() {
    window.location.href = './EditPlant'
  }

  function deletePlant() {
    if (confirm("Do you really want to delete this plant?")) {
      const URLParams = new URLSearchParams();
      URLParams.append("identifier", typeof window !== 'undefined' ? localStorage.getItem('activePlant') : null)
      URLParams.append('token', typeof window !== 'undefined' ? localStorage.getItem('token') : null)

      axios.post(process.env.NEXT_PUBLIC_API_URL+"/plantAPI/deletePlant", URLParams)
          .then(function (response) {
            console.log(response.data);
            getData()
            window.location.href = './'
          })
    }
  }


    return (
    <div>
      <SiteHeader loggedIN={true} />
      <div className='pageContent'>
          <div className='homePortfolio'>
            <div>
              <Typography classSet={'homeHeadline'}>{plantData.name}</Typography>
              <button onClick={editPlant}>Edit Plant</button>
              <button onClick={deletePlant}>Remove Plant</button>
              <Grid classSet="plantPropertyGrid" rows={2} columns={3}>
              <Typography classSet="plantProperty humidity">Humidity: {data[typeof window !== 'undefined' ? localStorage.getItem('activePlant') : null].currentData.humidity}%</Typography>
              <Typography classSet="plantProperty ph">PH: {data[typeof window !== 'undefined' ? localStorage.getItem('activePlant') : null].currentData.ph}</Typography>
              <Typography classSet="plantProperty sunlight">Sunlight Today: {data[typeof window !== 'undefined' ? localStorage.getItem('activePlant') : null].currentData.sun}seconds</Typography>
              <Typography classSet="plantProperty temperature">Temperature: {data[typeof window !== 'undefined' ? localStorage.getItem('activePlant') : null].currentData.temperature}F</Typography>
              <Typography classSet="plantProperty water">Water: {data[typeof window !== 'undefined' ? localStorage.getItem('activePlant') : null].currentData.water}ml</Typography>
              </Grid>
          </div>
          </div>
          

      </div>
      {/* <SiteFooter /> */}
  </div>
    )
}

export default Plants


