

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

const Home  = ({data}) => {
  

    return (
        <div>
            <SiteHeader />
            <div className='pageContent'>
                <div className='homePortfolio'>
                    <Typography classSet={'homeHeadline'}>Your Plants:</Typography>
                    <Grid classSet="plantsGrid" rows={1} columns={2}>
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
                    </Grid>
                </div>
                

            </div>
            {/* <SiteFooter /> */}
        </div>
    )
}

export default Home