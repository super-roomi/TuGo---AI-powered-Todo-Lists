import React from 'react'
import { Button, Avatar } from '@mui/material'
import { useNavigate } from 'react-router'
import { UserAuth } from '../AuthContext'


export default function Navigation() {
    const navigate = useNavigate()

    const { session, signOut } = UserAuth();

    const handleSignOut = async (e) => {
        try {
            await signOut()
            navigate('/')
        } catch (error) {
            console.error("error occured while signing out", error)
        }
    }
    return (
        <nav className='flex flex-row justify-between fixed top-0 p-2 border bg-black text-white gap-x-3.5 rounded-full mx-5 mt-5 w-350 z-100'>
            <div className='flex flex-row'>
                <h1 className='text-xl pl-2 pt-1'>To-Go!</h1>
                <div className='flex items-center ml-5 mt-0.5 gap-x-7'>
                    <button className='px-1 hover:underline'>Home</button>
                    <button className='px-1 hover:underline'>Your lists</button>
                    <button className='px-1 hover:underline'>About</button>
                </div>
            </div>
            <div className='flex gap-x-2'>
                <button onClick={() => handleSignOut()} className='py-1 mx-2 hover:cursor-pointer underline'>Log out</button>
                <p className='pt-2'>{session?.user?.email}</p>
                <Avatar />
            </div>
        </nav>
    )
}
