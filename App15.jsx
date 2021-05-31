import React, { useState } from 'react';
import Todolist from './Todolist';

const App15 = () =>{

    const [inputList,setInputList] = useState();
    const [items,setItems]= useState([]);


    const itemEvents=(event)=>{
        setInputList(event.target.value);
    }

    const listofItems=()=>{
        setItems((oldItems) => {
            return [...oldItems,inputList];
        });
        setInputList("");

    };

    const deleteItems = (id)=>{
        console.log("deleted");

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index)=>{
                return index !== id;
            })
        }
        )};

    return(
    <>
        <div className='main_div'>
            <div  className='center_div'>
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type="text" placeholder="Add Items Here" 
            value={inputList}
            onChange={itemEvents}/>
            <button onClick={listofItems}> + </button>
            

            <ol>
                {/*<li> {inputList}</li>*/}
                { items.map((itemval, index) => {
                    return(
                     <Todolist 
                        key={index}
                        id={index}
                        text={itemval}
                        onSelect={deleteItems}
                     />)
                    })}
            </ol>
          </div>                
        </div>
    </>
    )
}

export default App15;
