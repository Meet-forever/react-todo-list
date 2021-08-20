import React from 'react'
import {DeleteSweep} from '@material-ui/icons';

export default function ClearCatch({setArr}) {
    const clearHandler = () => {
        localStorage.setItem('todoList', JSON.stringify([]));
        setArr([]);
    }

    return (
        <div className="clear-btn-set">
                <button onClick={clearHandler} className="clear-btn" type='button'><DeleteSweep /></button>
        </div>
    )
}
