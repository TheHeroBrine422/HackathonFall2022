import Link from "next/link"



const SiteHeader = ({loggedIN=true}) => {

    return (
        <div className="siteHeader">
            <div className="toHome">Home</div>
            <h1 className="siteTitle">
                MyPlantium
            </h1>
            {loggedIN &&
            <div>
                <div className="logOut">Log Out</div>
                <div className="accountSettings">Account Settings</div>
            </div>
            }
        </div>
    )
}

export default SiteHeader