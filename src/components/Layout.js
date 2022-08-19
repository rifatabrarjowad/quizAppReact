import Nav from './Nav';
import classes from '../css/Layout.module.css';
function Layout(  {children}) {

    return (
        <>
            <Nav />
            <main className={classes.main}>
                <div className={classes.container}>
                    {children}
                </div>

            </main>

        </>
    );
}

export default Layout;
