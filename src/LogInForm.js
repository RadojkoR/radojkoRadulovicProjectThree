

const LogInForm = () => {
    return(
        <form action="submit" className="logInForm">
            <label htmlFor="newLiItem">Log in</label>
            <input type="text" id="newLiItem" maxlength="50"  required/>
            <button className="logInButton" >Log in</button>
        </form>
    )
}

export default LogInForm;