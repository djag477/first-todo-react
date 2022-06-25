import React, {useEffect, useState} from "react";
import "./Bar.css";


const InputBar = ({addItemProp, allItems}) => {

    const [inputValue, setInputValue] = useState("")

    const addItem = _ => addItemProp(
/*         {
        id : (new Date()).getTime(),
    } */
        inputValue)
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    
    const handleClearClick = () => {
        setInputValue("")
        console.log("Content was cleared");
    }
    
    const handleSubmit = (e) => {
        addItem();
        e.preventDefault();

        const newItem = inputValue;
        console.log("Add button clicked:", newItem);
        setInputValue("")   
        console.log("these are all the items (allItems)", allItems);
          

    }

    const handleDelete = (e) => {
        e.nativeEvent.path[1].remove();
    }

    const handleEdit = (e) => {
        console.log(e.nativeEvent.path[1].querySelector('p').textContent);
    }

    const shouldDisplayButton = inputValue.length > 0

    return (
        <header>
            <div>
                <h1>Add your task</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={inputValue} placeholder="Type something" onChange={handleInputChange}/>
                    {shouldDisplayButton && <button type="submit" onSubmit={handleSubmit}>Add Task</button>}
                    {shouldDisplayButton && <button onClick={handleClearClick}>Clear</button>}
                </form>
            </div>
            <div>
                <ul>

                    {allItems.map((item) => {
                        return <li key={item}><p style={{display : 'inline-block'}}>{item}</p><button onClick={handleDelete}>Delete</button><button onClick={handleEdit}>Edit</button></li>
                    })}

                </ul>
            </div>
        </header>

    )



}




export default InputBar