import Account from "./Account";
import classes from "../css/Nav.module.css";
function Nav() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href="index.html" className={classes.brand}>
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