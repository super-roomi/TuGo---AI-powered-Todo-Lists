import React from 'react'
import { Button, Avatar } from '@mui/material'


export default function Navigation() {
    return (
        <nav className='flex flex-row justify-between fixed top-0 p-2 border bg-black text-white gap-x-3.5 rounded-full mx-5 mt-5 w-350 z-100'>
            <div className='flex flex-row'>
                <h1 className='text-xl pl-2 pt-1'>To-Go!</h1>
                <div className='ml-5 mt-0.5'>
                    <Button color='' variant='text' size='small'>Home</Button>
                    <Button color='' variant='disabled' size='small'>Your lists</Button>
                    <Button color='' variant='text' size='small'>About</Button>
                </div>
            </div>
            <div className='flex gap-x-2'>
                <p className='pt-2'>Username</p>
                <Avatar />
            </div>
        </nav>
    )
}
