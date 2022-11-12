import Link from "next/link"
import Grid from "../Grid";
import Typography from "../Typography";


const socials = [
    {
        title: "LinkedIn",
        link: "./blog",
    },
    {
        title: "Reddit",
        link: "./cooking",
    },
    {
        title: "Youtube",
        link: "./hobbies",
    },
    {
        title: "Github",
        link: "./projects",
    },
    {
        title: "Instagram",
        link: "./about",
    },
    {
        title: "Twich",
        link: "./hobbies",
    },
    {
        title: "Twitter",
        link: "./projects",
    },
    {
        title: "Facebook",
        link: "./about",
    },
];

export default function SiteFooter () {

    return (
        <Grid rows={1} columns={2} classSet={"siteFooter"}>
            <div>
                <Typography>ScottEagleson.com V4.0</Typography>
                <Typography>Email</Typography>
                <Typography>Resume</Typography>
                <Typography>Site Map</Typography>
            </div>
            <div>
                <Typography>Follow</Typography>
                <Grid rows={3} columns={3} classSet={'socialLinks'}>
                    {socials.map((socialLink, index) => (
                        <Link 
                            href={socialLink.link}  
                            key={index}
                            >
                            <a className='socialLink' >{socialLink.title}</a>
                        </Link>
                    ))}
                </Grid>
            </div>
        </Grid>
    )
}