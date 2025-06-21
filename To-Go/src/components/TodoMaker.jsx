import React from 'react'

function TodoMaker({ text, id }) {
    if (id == 1) {
        return <p className='relative badge m-2 bg-white text-black'>{text}</p>
    } else if (id == 2) {
        return <p className='relative badge bg-amber-300'>{text}</p>
    } else {
        return <p className='relative text-xl'>{text}</p>
    }
}

export default TodoMaker