

import { 
    SiteHeader,
    SiteFooter,
    Grid,
    Photo,
    Typography,
    Card,
} from './components'


const plants = [
    {
        name: "cactus",
        water: 100,
        soil: 52,
        health: 96,
    },
    {
        name: "alo vera",
        water: 82,
        soil: 82,
        health: 59,
    },
    {
        name: "lavender",
        water: 90,
        soil: 72,
        health: 97,
    },
]

const Home  = ({data}) => {

    return (
        <div>
            <SiteHeader />
            <div className='pageContent'>
                <div className='homePortfolio'>
                    <Typography classSet={'homeHeadline'}>Your Plants:</Typography>
                    <Grid classSet="plantsGrid" rows={1} columns={2}>
                        {plants.map((plant, index) => (
                            <Card
                                key={index}
                                title={plant.name}
                                // content={project.description}
                                // image={project.image}
                                >
                            </Card>
                        ))}
                    </Grid>
                </div>
                

            </div>
            {/* <SiteFooter /> */}
        </div>
    )
}

export default Home