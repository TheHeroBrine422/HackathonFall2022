import React from 'react'
import { SiteHeader, Typography } from '../../views/Home/components'
import { useEffect, useState } from 'react'
import {Grid } from '../../views/Home/components'

function deletePlant() {
  if (confirm("Do you really want to delete this plant?")) {
    const URLParams = new URLSearchParams();
    URLParams.append("identifier", localStorage.getItem('activePlant'))
    URLParams.append('token', localStorage.getItem('token'))

    axios.post("http://localhost:3000/plantAPI/deletePlant", URLParams)
        .then(function (response) {
          console.log(response.data);
        })
  }
}

function renamePlant() {
  name = prompt("What do you want the new name of this plant to be?", data[localStorage.getItem('activePlant')].name)
  const URLParams = new URLSearchParams();
  URLParams.append("identifier", localStorage.getItem('activePlant'))
  URLParams.append('token', localStorage.getItem('token'))
  URLParams.append('name', name)

  axios.post("http://localhost:3000/plantAPI/setPlantName", URLParams)
      .then(function (response) {
        console.log(response.data);
      })
}

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
              <button onClick={renamePlant()}>Rename</button>
              <button>Change Plant</button>
              <button onClick={deletePlant()}>Remove Plant</button>
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
