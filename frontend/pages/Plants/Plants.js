import React, { useCallback } from 'react'
import { SiteHeader, Typography } from '../../blocks/components'
import { useEffect, useState } from 'react'
import {Grid } from '../../blocks/components'
import axios from 'axios'

const Plants = ({data, getData}) => {
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
              <Typography classSet={'homeHeadline'}>{typeof window !== 'undefined' ? data[localStorage.getItem('activePlant')].name : null}</Typography>
              <button onClick={editPlant}>Edit Plant</button>
              <button onClick={deletePlant}>Remove Plant</button>
              <Grid classSet="plantPropertyGrid" rows={2} columns={3}>
                <div className='plantImagePlantsPage'><div className={typeof window !== 'undefined' ? data[localStorage.getItem('activePlant')].type : null}/></div>
              <Typography classSet="plantProperty humidity">Humidity: {typeof window !== 'undefined' ? data[localStorage.getItem('activePlant')].currentData.humidity : null}%</Typography>
                <Typography classSet="plantProperty ph">PH: {typeof window !== 'undefined' ? data[localStorage.getItem('activePlant')].currentData.ph : null}</Typography>
                <Typography classSet="plantProperty sunlight">Sunlight Today: {typeof window !== 'undefined' ? data[localStorage.getItem('activePlant')].currentData.sun : null}seconds</Typography>
                <Typography classSet="plantProperty temperature">Temperature: {typeof window !== 'undefined' ? data[localStorage.getItem('activePlant')].currentData.temperature : null}F</Typography>
                <Typography classSet="plantProperty water">Water: {typeof window !== 'undefined' ? data[localStorage.getItem('activePlant')].currentData.water : null}ml</Typography>
              </Grid>
          </div>
          </div>
          

      </div>
      {/* <SiteFooter /> */}
  </div>
    )
}

export default Plants


