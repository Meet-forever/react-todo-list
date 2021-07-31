import AddList from "./AddList";

export default function ListContainer({inputText, setText, textArr, setArr}){
    return(
        <div>
            <ul>
                {textArr.map(items => (
                <AddList 
                    listVal = {items.userString}
                    textArr = {textArr}
                    currenti = {items}
                    setArr = {setArr}/>
                ))}
                
            </ul>
        </div>
    );
}