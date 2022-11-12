import Link from "next/link"



const SiteHeader = () => {

    return (
        <div className="siteHeader">
            <h1 className="siteTitle">
                MyPlantium
            </h1>

            {/* <ul className="headerLinks">
            {headLinks.map((headLink, index) => (
                <Link 
                    href={headLink.link}  
                    key={index}
                    >
                    <a className='headerLink'>{headLink.title}</a>
                </Link>
            ))}
            </ul> */}
        </div>
    )
}

export default SiteHeader