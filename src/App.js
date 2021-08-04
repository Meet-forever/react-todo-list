import {useState, useEffect} from 'react'
import Form from "./components/Form";
import ListContainer from "./components/ListContainer";
import ClearCatch from './components/ClearCatch';

function App() {
  const [inputText, setText] = useState("");
  const [textArr, setArr] = useState([]);
  const [condition, setCondition] = useState("all");

  //Run once
  //First it will check if the site already have the list stored or not
  // And if it contains the list then it will set values otherwise it will
  // create new empty list for it. 

  useEffect(()=>{
    getLocalTodoList()
  },[]);

   
  const getLocalTodoList= () =>{
    if(localStorage.getItem('todoList')===null){
      localStorage.setItem('todoList', JSON.stringify([]));
    }
    else{
      const fetchedTodoList = JSON.parse(localStorage.getItem('todoList'));
      setArr(fetchedTodoList);
    }
  }

  //Run and save
  useEffect(()=>{
    localStorage.setItem('todoList', JSON.stringify(textArr))
  },[textArr]);

  return (
    <div className="App">
      <ClearCatch setArr={setArr} /> 

      <header><h1>TODO LIST</h1></header>     
      
      <Form 
      inputText={inputText}
      setText={setText}
      textArr={textArr}
      setArr={setArr}
      setCondition={setCondition}/>


      <ListContainer 
      textArr={textArr}
      condition={condition}
      setArr={setArr}/> 

    </div>
  );
}
 
export default App;
