import AddList from "./AddList";

export default function ListContainer({condition, textArr, setArr}){
   
    const ListContainerHandler = (items) =>{
        return (<AddList 
            listVal = {items.userString}
            key = {items.id}
            textArr = {textArr}
            currenti = {items}
            setArr = {setArr}
            condition = {condition}/>)
    }
    return(
        <div className="ListBox">
            <div className="ListContainer">
                {textArr.map(items => (
                    (condition === "all")?
                        ListContainerHandler(items)
                    :
                    (condition === "completed" && items.status)?
                        ListContainerHandler(items)
                    :
                    (condition === "remaining" && !items.status)?
                        ListContainerHandler(items)
                    :
                    null
                ))}
                
            </div>
        </div>
    );
}