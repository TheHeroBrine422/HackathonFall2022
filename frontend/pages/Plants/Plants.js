import React from 'react'
import { SiteHeader, Typography } from '../../views/Home/components'


const Plants = ({data}) => {
    return (<div>
      <SiteHeader />
      <div className='pageContent'>
          <div className='homePortfolio'>
              <Typography classSet={'homeHeadline'}>Your Plant</Typography>
              {/* <Grid classSet="plantsGrid" rows={1} columns={2}>
                  {Object.values(data).map((plant, index) => (
                      <div>
                      <Link 
                          href={"./Plants"}
                      >
                          <a className='headerLink'>
                      <Card
                          key={index}
                          title={plant.type}
                          >
                      </Card></a>
                      </Link>
                      </div>
                  ))}
                  <button id='addPlant' className='addPlant'>+</button>
              </Grid> */}
          </div>
          

      </div>
      {/* <SiteFooter /> */}
  </div>
    )
}

export default Plants
