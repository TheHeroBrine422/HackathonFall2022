import Link from "next/link"


const headLinks = [
    // {
    //     title: "Blog",
    //     link: "./blog",
    // },
    // {
    //     title: "Cooking",
    //     link: "./cooking",
    // },
    // {
    //     title: "Hobbies",
    //     link: "./hobbies",
    // },
    {
        title: "Projects",
        link: "./projects",
    },
    // {
    //     title: "About",
    //     link: "./about",
    // },
];

const SiteHeader = () => {

    return (
        <div className="siteHeader">
            <h1 className="siteTitle">
                ScottEagleson
            </h1>

            <ul className="headerLinks">
            {headLinks.map((headLink, index) => (
                <Link 
                    href={headLink.link}  
                    key={index}
                    >
                    <a className='headerLink'>{headLink.title}</a>
                </Link>
            ))}
            </ul>
        </div>
    )
}

export default SiteHeader