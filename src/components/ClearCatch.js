import React from 'react'


export default function ClearCatch({setArr}) {
    const clearHandler = () => {
        localStorage.setItem('todoList', JSON.stringify([]));
        setArr([]);
    }

    return (
        <div className="clear-btn-set">
                <button onClick={clearHandler} className="clear-btn" type='button'>Clear Catch</button>
        </div>
    )
}
