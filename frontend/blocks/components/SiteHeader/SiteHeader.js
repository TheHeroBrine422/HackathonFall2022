import Link from "next/link"

const SiteHeader = ({loggedIN}) => {

    function logout() {
        localStorage.setItem('token', "")
        window.location.href = "../"
        window.location.reload()
    }

    return (   
        <div className="siteHeader">
            <Link href={'./'}>
                <div className="toHome"/>
            </Link>
            <h1 className="siteTitle">
                The Fun-Gi Gardener
            </h1>
            {loggedIN &&
                <div>
                    <button className="logOut" onClick={logout}>Log Out</button>
                    <button className="accountSettings">Account Settings</button>
                </div>
            }
        </div>
    )
}

export default SiteHeader