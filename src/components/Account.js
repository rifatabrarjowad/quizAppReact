import classes from '../css/Account.module.css';
function Account() {



    return (
        <div className={classes.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
            <a href="signup.html">Signup</a>
            {/*// <!-- <span class="material-icons-outlined" title="Logout"> logout </span> -->  */}
        </div>
    );
}

export default Account;