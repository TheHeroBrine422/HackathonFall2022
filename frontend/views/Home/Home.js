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


    const [activePlant, setActivePlant] = useState('');


  const handleActivePlant = plant => {
      const URLParams = new URLSearchParams();
      URLParams.append("identifier", plant)
      URLParams.append("token", token)

      axios.post("http://172.20.10.12:3000/plantAPI/setActivePlant", URLParams)
          .then(function (response) {
              if ("invalid") {

              } else {
                  setToken(response.data)
              }
          })
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