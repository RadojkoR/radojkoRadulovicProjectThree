

const LogIn = ({handleNewUserName, userName, handleSubmitUserName, inputNewUserName}) => {
    return(
        <div className="userNameForm">
            <div className="singUp">
                <form action="submit">
                    <label htmlFor="newUserName">User Name</label>
                    <input type="text" id="newUserName" onChange={handleNewUserName}  value={inputNewUserName}/>
                    <button onClick={handleSubmitUserName}>Sing Up</button>
                </form>
            </div>
            <div className="logIn">

            </div>
            {/* <button onClick={handleLogIn}>Log In</button> */}
            {/* {
                loggedIn === true ? <p>hello, {userName}</p> : <p>please log in</p>
            } */}
           <p>{userName}</p>

        </div>
    )
}

export default LogIn;