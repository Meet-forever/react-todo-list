
export default function AddList({listVal, textArr, setArr, currenti}) {
    const DoneHandler = () =>{
        setArr(textArr.map(i =>{
            if(currenti.id===i.id){
                return{
                    ...i,
                    status: !currenti.status
                }
            }
            return i;
        }))
    };
    const RemoveHandler = () =>{
       setArr(textArr.filter((ele) => (ele.id !== currenti.id)));
    };
    return (
        <>
          <li className={`${(currenti.status)? "completed": ""}`}>{listVal}</li>
          <button className="done-btn" onClick={DoneHandler}>-</button>
          <button className="remove-btn" onClick={RemoveHandler}>x</button> 
        </>
    )
}
