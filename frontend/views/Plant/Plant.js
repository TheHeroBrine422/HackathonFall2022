

import { 
  SiteHeader,
  SiteFooter,
  Grid,
  Photo,
  Typography,
  Card,
} from '../../blocks/components'



const Plant  = ({plantData}) => {


  return (
      <div>
          <SiteHeader />
          <div className='pageContent'>
              <div className='homePortfolio'>
                  <Typography classSet={'homeHeadline'}>{plantData.name}</Typography>
                  <Grid classSet="plantsGrid" rows={1} columns={2}>
                      <button id='addPlant' className='addPlant'>+</button>
                  </Grid>
              </div>
              

          </div>
          {/* <SiteFooter /> */}
      </div>
  )
}

export default Plant