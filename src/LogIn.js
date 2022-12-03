

const LogIn = ({handleLogIn, userName, loggedIn, handleUserName,inputUserNameChange}) => {
    return(
        <div className="logIn">
            <form action="submit">
                <label htmlFor="userName">User Name</label>
                <input type="text" id="userName" onChange={inputUserNameChange}  value={userName}/>
            </form>
            {/* <button onClick={handleLogIn}>Log In</button> */}
            <button onClick={handleUserName}>Set your user name</button>
            {
                loggedIn === true ? <p>hello, {userName}</p> : <p>please log in</p>
            }
           <p>{userName}</p>

        </div>
    )
}

export default LogIn;