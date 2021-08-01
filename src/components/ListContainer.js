import AddList from "./AddList";

export default function ListContainer({condition, textArr, setArr}){
    return(
        <div>
            <ul>
                {textArr.map(items => (
                    <AddList 
                    listVal = {items.userString}
                    key = {items.id}
                    textArr = {textArr}
                    currenti = {items}
                    setArr = {setArr}
                    condition = {condition}/>
                ))}
                
            </ul>
        </div>
    );
}