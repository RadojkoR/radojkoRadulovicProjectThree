


const SingUpForm = () => {
    return(
        <form action="submit" className="singUpForm">
            <label htmlFor="newLiItem">Sing Up</label>
            <input type="text" id="newLiItem" maxlength="50"  required/>
            <button className="singUpButton" >Sing Up</button>
        </form>
    )
}

export default SingUpForm;