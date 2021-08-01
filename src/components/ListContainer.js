import AddList from "./AddList";

export default function ListContainer({condition, textArr, setArr}){
    return(
        <div>
            <ul>
                {textArr.map(items => (
                    (condition === "all")?
                    <AddList 
                    listVal = {items.userString}
                    key = {items.id}
                    textArr = {textArr}
                    currenti = {items}
                    setArr = {setArr}
                    condition = {condition}/>
                    :
                    (condition === "completed" && items.status)?
                    <AddList 
                    listVal = {items.userString}
                    key = {items.id}
                    textArr = {textArr}
                    currenti = {items}
                    setArr = {setArr}
                    condition = {condition}/>
                    :
                    (condition === "remaining" && !items.status)?
                    <AddList 
                    listVal = {items.userString}
                    key = {items.id}
                    textArr = {textArr}
                    currenti = {items}
                    setArr = {setArr}
                    condition = {condition}/>
                    :
                    null
                ))}
                
            </ul>
        </div>
    );
}