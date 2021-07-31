import {useState} from 'react'
import Form from "./components/Form";
import ListContainer from "./components/ListContainer";

function App() {
  const [inputText, setText] = useState("");
  const [textArr, setArr] = useState([]);
  return (
    <div className="App">
      
      <header><h1>TODO LIST</h1></header>
      
      <Form 
      inputText={inputText}
      setText={setText}
      textArr={textArr}
      setArr={setArr}/>
      <ListContainer 
      inputText={inputText}
      setText={setText}
      textArr={textArr}
      setArr={setArr}/>      
    </div>
  );
}

export default App;
