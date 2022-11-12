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
              <Typography classSet={'homeHeadline'}>Your Plant</Typography>

              <Typography classSet={'homeHeadline'}>{plantData?.name}</Typography>
              <Typography classSet={'homeHeadline'}>Your Plant</Typography>
              <Typography classSet={'homeHeadline'}>Your Plant</Typography>
              
          </div>
          

      </div>
      {/* <SiteFooter /> */}
  </div>
    )
}

export default Plants
