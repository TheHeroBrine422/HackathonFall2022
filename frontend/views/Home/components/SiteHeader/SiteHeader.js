import Link from "next/link"



const SiteHeader = ({loggedIN}) => {

    return (
        <div className="siteHeader">
            <Link href={'./'}>
            <div className="toHome">Home</div></Link>
            <h1 className="siteTitle">
                MyPlantium
            </h1>
            {loggedIN &&
            <div>
                <button className="logOut">Log Out</button>
                <button className="accountSettings">Account Settings</button>
            </div>
            }
        </div>
    )
}

export default SiteHeader