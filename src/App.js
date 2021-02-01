import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState([]);
  const [inputVal, setInputVal] = useState("");
  //arr[i] += arr[i+1];
  const addToList = (text) => {
    setValue([...value, text]);
    return value;
  }

//remove item from the end of the list
  console.log("value" + value);
  return (
    <div className="App">
      <input type="text" value={inputVal} onChange={(e) => {setInputVal(e.currentTarget.value)}} />
      <p> {inputVal} </p>
      <ul>
        {value.map((v,index) =>
          <div>
            <li>{v}</li>
            <button onClick={(index) => setValue(value.slice(0, -1))}>Remove</button>
          </div>
         )}
        </ul>
        <button onClick={() => addToList(inputVal)}>Submit</button>
    </div>
  );
}

export default App;


//input field with submit button
//add to input it will display as a list
