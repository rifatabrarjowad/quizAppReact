import Nav from './Nav';
import classes from '../css/Layout.module.css';
function Layout() {

    return (
        <>
            <Nav />
            <main className={classes.main}></main>

        </>
    );
}

export default Layout;
