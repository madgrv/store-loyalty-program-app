export default function Header() {

    return(
        <header className="header">
            <div className="header-title">
                <h1>BooX - Loyalty Program</h1>
            </div>
            <nav className="nav">
                <ul className="nav-menu">
                    <li>Home</li>
                    <li>Back</li>
                    <li className="logout-button">Logout</li>
                </ul>
            </nav>
        </header>
    )
}