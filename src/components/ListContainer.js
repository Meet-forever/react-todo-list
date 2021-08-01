import AddList from "./AddList";

export default function ListContainer({condition, textArr, setArr}){
    return(
        <div>
            <ul>
                {textArr.map(items => (
                   (!condition)? <AddList 
                    listVal = {items.userString}
                    key = {items.id}
                    textArr = {textArr}
                    currenti = {items}
                    setArr = {setArr}
                    condition = {condition}/>:(items.status === true)? <AddList 
                    listVal = {items.userString}
                    key = {items.id}
                    textArr = {textArr}
                    currenti = {items}
                    setArr = {setArr}
                    condition = {condition}/>:null
                ))}
                
            </ul>
        </div>
    );
}