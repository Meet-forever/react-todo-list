
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
                id: Math.random() * 1000,
                hide: false
            }
        ]);
        setText("");
    };
    const CheckHandler = () =>{
        setCondition(i => true);
    };
    const ALLHandler = () => {
        setCondition(i => false);
    };
    return (
        <form>
            <input value={inputText} type="text" onInput={InputHandler} />
            <button type="submit" onClick={SubmitHandler}>Submit</button>
            <input type="radio" id="finished" name="options" value="finished" onClick={CheckHandler}/>
            <label htmlFor="finished">Completed</label>
            <input type="radio" id="all" name="options" value="all" onClick={ALLHandler} />
            <label htmlFor="all">ALL</label>    
        </form>
    )
}
