import { useState } from 'react';
import axios from 'axios';

import { 
    SiteHeader,
    SiteFooter,
    Grid,
    Photo,
    Typography,
    Card,
} from './components'
import Plant from '../Plant'
import Link from 'next/link'

const headLinks = [
    {
        title: "Projects",
        link: "./projects",
    },
];

const Home  = ({data, token}) => {

  const handleActivePlant = plant => {
    localStorage.setItem('activePlant', plant)
  }

    return (
        <div>
            <SiteHeader />
            <div className='pageContent'>
                <div className='homePortfolio'>
                    <Typography classSet={'homeHeadline'}>Your Plants:</Typography>
                    <Grid classSet="plantsGrid" rows={1} columns={2}>
                        {Object.keys(data).map((plant, index) => (
                            <div key={index}>
                            <Link 
                                href={"./Plants"}
                            >
                            <button
                                // type="text"
                                // id="username"
                                // name="username"
                                onClick={handleActivePlant(plant)}
                            >
                                <a className='headerLink'>
                            <Card
                                key={index}
                                title={data[plant]?.name}
                                >
                            </Card></a>
                            </button>
                            </Link>
                            </div>
                        ))}
                        <button id='addPlant' className='addPlant'>+</button>
                    </Grid>
                </div>
                

            </div>
            {/* <SiteFooter /> */}
        </div>
    )
}

export default Home