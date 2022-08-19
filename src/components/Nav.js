import Account from "./Account";

function Nav() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="index.html" className="brand">
                        <img src="./images/logo-bg.png" alt="Learn with Sumit Logo"/>
                        <h3>Learn with Sumit</h3>
                    </a>
                </li>
            </ul>
           <Account />
        </nav>
    );
}

export default Nav;