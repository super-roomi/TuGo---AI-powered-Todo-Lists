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
        <div className='flex'>
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
                {/* <div className="glass flex justify-between items-center rounded-full p-2 mt-6 mx-5">
                    <div className="flex flex-row items-center p-2 gap-x-2">
                        <Avatar />
                        <p>{session?.user?.email}</p>
                    </div>
                    <h1 className="text-3xl">Tu<span className="text-orange-500">Go</span></h1>
                    <div className="flex flex-row items-center">
                        <button onClick={signOut} className="bg-sky-500 mr-1 py-2 px-3 rounded-full text-md transition-all hover:bg-orange-400 hover:text-white hover:cursor-pointer ease-in-out duration-250">Log out</button>
                    </div>
                </div> */}
            </nav>
        </div>
    )
}
