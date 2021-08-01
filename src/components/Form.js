
export default function Form({inputText, setText, textArr, setArr, setCondition}) {
    const InputHandler = (e) =>{
        setText(e.target.value);
    };
    const SubmitHandler = (e) =>{
        e.preventDefault();
        setArr(i =>[
            ...textArr,
            {
                userString: inputText,
                status: false,
                id: Math.random() * 1000
            }
        ]);
        setText("");
    };
    const OptionHandler = (e) =>{
        setCondition(e.target.value);
    }; 
    return (
        <form>
            <div>
                <input className="inputTextArea" value={inputText} type="text" onInput={InputHandler} />
                <button className="submit-btn" type="submit" onClick={SubmitHandler}>Submit</button>
            </div>
            <select className="selectBox" onChange={OptionHandler}>
                <option value="all" >ALL</option>
                <option value="completed" >Completed</option>
                <option value="remaining" >Remaining</option>
            </select>    
        </form>
    )
}


// <input type="radio" id="finished" name="options" value="finished" onClick={CheckHandler}/>
// <label htmlFor="finished">Completed</label>
// <input type="radio" id="all" name="options" value="all" onClick={ALLHandler} />
// <label htmlFor="all">ALL</label>