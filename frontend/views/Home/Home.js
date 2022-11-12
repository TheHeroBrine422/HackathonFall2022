import { useState } from 'react';
import axios from 'axios';

import { 
    SiteHeader,
    SiteFooter,
    Grid,
    Photo,
    Typography,
    Card,
} from '../../blocks/components'
import Plant from '../Plant'
import Link from 'next/link'




const Home  = ({data, token}) => {

  const handleActivePlant = (plant) => {
    localStorage.setItem('activePlant', plant)
    window.location.href = './Plants'
  }

    return (
        <div>
            <SiteHeader loggedIN={true} />
            <div className='pageContent'>
                <div className='homePortfolio'>
                    <Typography classSet='homeHeadline'>Your Plants:</Typography>
                    <Grid classSet="plantsGrid" rows={1} columns={2}>
                        {Object.keys(data).map((plant, index) => (
                            <div key={index}>
                            <button
                                onClick={() => handleActivePlant(plant)}
                                className="plantButton"
                            >
                            <Card
                                key={index}
                                title={data[plant]?.name}
                                >
                            </Card>
                            </button>
                            </div>
                        ))}
                        <div>
                            <Link href={'./AddPlant'}>
                                <button id='addPlant' className='addPlant plantButton'>
                                    <div className='addCard'>
                                <div className='addText'>+</div>
                                </div>
                                </button>
                            </Link>
                        </div>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Home