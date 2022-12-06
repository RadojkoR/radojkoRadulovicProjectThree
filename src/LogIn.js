

const LogIn = ({handleNewUserName, userName, handleSubmitUserName, inputNewUserName, handleLogIn, loggedIn}) => {
    return(
        <div className="userNameForm">
            <div className="singUp">
                <form action="submit">
                    <label htmlFor="newUserName">User Name</label>
                    <input type="text" id="newUserName" onChange={handleNewUserName}  value={inputNewUserName}/>
                </form>
                    <button onClick={handleSubmitUserName}>Sing Up</button>
            </div>
            <div className="logIn">
                <form action="submit">
                </form>
                    <button onClick={handleLogIn}>Log In</button>
            </div>
           <p>{userName}</p>

        </div>
    )
}

export default LogIn;