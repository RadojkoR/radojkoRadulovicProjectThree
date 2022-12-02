

const Form = ( {handleInputChange, userInput, handleSubmit} ) => {
    return(
        <form action="submit">
            <label htmlFor="newLiItem">What's on the list today</label>
            <input type="text" id="newLiItem" onChange={handleInputChange} value={userInput} required/>
            <button className="submitButton" onClick={handleSubmit}>Add to List</button>
        </form>
    )
}


export default Form;