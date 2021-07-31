
export default function Form({inputText, setText, textArr, setArr}) {
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
    }
    return (
        <form>
            <input value={inputText} type="text" onInput={InputHandler} />
            <button type="submit" onClick={SubmitHandler}>Submit</button>
            <input type="radio" id="finished" name="options" value="finished"/>
            <label for="finished">Completed</label>
            <input type="radio" id="all" name="options" value="all"/>
            <label for="all">ALL</label>    
        </form>
    )
}
