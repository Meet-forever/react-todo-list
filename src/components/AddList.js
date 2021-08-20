import { Delete, Done } from '@material-ui/icons';

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
        <div className={`SingleList ${(currenti.status)? "paintIt": ""}`}>
          <input aria-label="List" className={`inputList ${(currenti.status)? "completed paintIt": ""}`} readOnly value={listVal}/>
            <div>
            <button className="done-btn" onClick={DoneHandler}><Done /></button>
            <button className="remove-btn" onClick={RemoveHandler}><Delete /></button> 
            </div>
        </div>
    )
}
