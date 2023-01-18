

const Form = ( {handleInputChange, userInput, handleSubmit} ) => {
    return(
        <form className="addListForm" action="submit">
            <label htmlFor="newLiItem">What's on the list today</label>
            <input className="addListInput" type="text" id="newLiItem" maxlength="60" onChange={handleInputChange} value={userInput} required/>
            <button className="submitButton" onClick={handleSubmit}>Add to List</button>
        </form>
    )
}


export default Form;