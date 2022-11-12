import React from 'react'
import { SiteHeader, Typography } from '../../views/Home/components'


const Plants = ({data}) => {
    return (<div>
      <SiteHeader />
      <div className='pageContent'>
          <div className='homePortfolio'>
              <Typography classSet={'homeHeadline'}>Your Plant</Typography>

              {/* <Typography classSet={'homeHeadline'}>{data.activePlant.}</Typography> */}
              <Typography classSet={'homeHeadline'}>Your Plant</Typography>
              <Typography classSet={'homeHeadline'}>Your Plant</Typography>
              
          </div>
          

      </div>
      {/* <SiteFooter /> */}
  </div>
    )
}

export default Plants
