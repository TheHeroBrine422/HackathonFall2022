import React from 'react'
import { SiteHeader, Typography } from '../../views/Home/components'
import { useEffect, useState } from 'react'
import {Grid } from '../../views/Home/components'


const Plants = ({data}) => {

  const [plantData, setPlantData] = useState({});

  useEffect(() => {
    setPlantData(data[localStorage.getItem('activePlant')])
  })


    return (
    <div>
      <SiteHeader loggedIN={true} />
      <div className='pageContent'>
          <div className='homePortfolio'>
            <div>
              <Typography classSet={'homeHeadline'}>{plantData.name}</Typography>
              <button>Rename</button>
              <button>Change Plant</button>
              <button>Remove Plant</button>
              <Grid classSet="plantPropertyGrid" rows={2} columns={3}>
              <Typography classSet="plantProperty humidity">Humidity: {data[localStorage.getItem('activePlant')].currentData.humidity}</Typography>
              <Typography classSet="plantProperty ph">PH: {data[localStorage.getItem('activePlant')].currentData.ph}</Typography>
              <Typography classSet="plantProperty sunlight">Sunlight: {data[localStorage.getItem('activePlant')].currentData.sun}</Typography>
              <Typography classSet="plantProperty temperature">Temperature: {data[localStorage.getItem('activePlant')].currentData.temperature}F</Typography>
              <Typography classSet="plantProperty water">Water: {data[localStorage.getItem('activePlant')].currentData.water}</Typography>
              </Grid>
          </div>
          </div>
          

      </div>
      {/* <SiteFooter /> */}
  </div>
    )
}

export default Plants
