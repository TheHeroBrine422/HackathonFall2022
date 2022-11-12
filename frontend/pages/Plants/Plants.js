import React from 'react'
import { SiteHeader, Typography } from '../../views/Home/components'
import { useEffect, useState } from 'react'



const Plants = ({data}) => {

  const [plantData, setPlantData] = useState({});

  useEffect(() => {
    setPlantData(data[localStorage.getItem('activePlant')])
  })


    return (<div>
      <SiteHeader />
      <div className='pageContent'>
          <div className='homePortfolio'>
              <Typography classSet={'homeHeadline'}>{plantData.name}</Typography>
              <Typography classSet={'homeHeadline'}>Hummidity: {plantData.currentData.hummidity}</Typography>
              <Typography classSet={'homeHeadline'}>PH: {plantData.currentData.ph}</Typography>
              <Typography classSet={'homeHeadline'}>Sun Light: {plantData.currentData.sun}</Typography>
              <Typography classSet={'homeHeadline'}>Temperature: {plantData.currentData.temperature}</Typography>
              <Typography classSet={'homeHeadline'}>Water: {plantData.currentData.water}</Typography>
              
          </div>
          

      </div>
      {/* <SiteFooter /> */}
  </div>
    )
}

export default Plants
