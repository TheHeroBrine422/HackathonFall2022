

import { 
    SiteHeader,
    SiteFooter,
    Grid,
    Photo,
    Typography,
    Card,
} from './components'


export default function Home () {

    return (
        <div>
            <SiteHeader />
            <div className='pageContent'>
                <div className='hero'>
                    <Grid rows={1} columns={4} classSet={'heroSummary'} >
                        <Photo image={''} title={''} classSet={'heroImage'} ></Photo>
                        <Typography classSet={'heroText'} >This is the summary section. I don't want to make a summary of myself yet, so I will do that in full later, but  I do need som filler text to see the layout and get a feel for the size of this section. Hopefully this has been enough text. I may even use it several times in other places too.</Typography>
                    </Grid>
                    <div className='threePhotos'>
                        <Photo image={''} title={''} ></Photo>
                        <Photo image={''} title={''} ></Photo>
                        <Photo image={''} title={''} ></Photo>
                    </div>
                </div>
                <div className='homePortfolio'>
                    <Typography classSet={'homeHeadline'}>What I do:</Typography>
                    <Grid rows={1} columns={4}>
                        {/* {projects.map((project, index) => (
                            <Card
                                key={index}
                                title={project.title}
                                content={project.description}
                                image={project.image}
                                >
                            </Card>
                        ))} */}
                    </Grid>
                    <div className='threePhotos'>
                    <Photo image={''} title={''} ></Photo>
                    <Photo image={''} title={''} ></Photo>
                    <Photo image={''} title={''} ></Photo>
                    </div>
                </div>
                <div className='homeBlog'>
                    <Typography classSet={'homeHeadline'} >What I am up to right now:</Typography>
                    <Grid rows={1} columns={4}>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </Grid>
                    <div className='threePhotos'>
                    <Photo image={''} title={''} ></Photo>
                    <Photo image={''} title={''} ></Photo>
                    <Photo image={''} title={''} ></Photo>
                    </div>
                </div>
                <div className='testimonials'>
                    <Typography classSet={'homeHeadline'} >What others think of me:</Typography>
                    <Grid rows={1} columns={4} classSet={'quotes'} >
                        <Card classSet={'quote'} ></Card>
                        <Card classSet={'quote'} ></Card>
                        <Card classSet={'quote'} ></Card>
                        <Card classSet={'quote'} ></Card>
                    </Grid>
                    <div className='threePhotos'>
                    <Photo image={''} title={''} ></Photo>
                    <Photo image={''} title={''} ></Photo>
                    <Photo image={''} title={''} ></Photo>
                    </div>
                </div>

            </div>
            <SiteFooter />
        </div>
    )
}