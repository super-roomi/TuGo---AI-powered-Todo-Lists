import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LoopIcon from '@mui/icons-material/Loop';


export default function Home() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const navigate = useNavigate()


    return (
        <>
            <div className='bg-[url(/Users/karam/Desktop/Projects/To-Go/To-Go/bg-img1.jpg)] bg-local lg:h-svh'>
                <div className='flex flex-col justify-center items-center pt-5 gap-y-2'>
                    <h1 className="text-7xl lg:text-6xl">Tu<span className="text-orange-500">Go</span></h1>
                    <p className="text-3xl lg:text-xl text-center"> The Web App for <span className='text-blue-500'>all</span> <br /> your <span className='text-orange-500'>todo lists!</span></p>
                </div>
                <div className='flex text-2xl justify-center items-center gap-x-5 mt-5'>
                    <button className='underline'>Try it!</button>
                    <button onClick={() => navigate('/register')} className='flex p-3 bg-blue-600 text-white rounded-full items-center text-lg gap-2'>Sign up <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg></button>
                    <button onClick={handleOpen} className='rounded-full p-1 scale-100 hover:bg-orange-400 hover:border-1 hover:scale-103 transition-all'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                    </button>
                </div>

                <h1 className='flex justify-center items-center my-8 underline text-4xl'>How?</h1>

                <div className='flex flex-col justify-center items-center gap-y-2 lg:flex-row lg:gap-x-3'>
                    <div className='flex flex-col justify-center items-center rounded-2xl bg-white glass py-10 px-20'>
                        <p className='text-6xl'>🗣️</p>
                        <p className='whitespace-nowrap'>Speak it</p>
                    </div>
                    <ArrowDownwardIcon className='lg:-rotate-90' />
                    <div className='flex flex-col justify-center items-center rounded-2xl bg-white glass py-10 px-20'>
                        <p className='text-6xl'>✋</p>
                        <p className='whitespace-nowrap'>Stop it</p>
                    </div>
                    <ArrowDownwardIcon className='lg:-rotate-90' />
                    <div className='flex flex-col justify-center items-center rounded-2xl bg-white glass py-10 px-17'>
                        <p className='text-6xl'>✨</p>
                        <p className='whitespace-nowrap'>Generate it</p>
                    </div>
                    <ArrowDownwardIcon className='lg:-rotate-90' />
                    <div className='flex flex-col justify-center items-center rounded-2xl bg-white glass py-10 px-20'>
                        <p className='text-6xl'>✅</p>
                        <p className='whitespace-nowrap mt-1'>Check it!</p>
                    </div>
                    <ArrowDownwardIcon className='hidden lg:-rotate-90' />
                    <LoopIcon fontSize='large' />

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        className='flex content-center items-center'
                    >
                        <Box className='flex justify-center items-center h-svh w-svw backdrop-blur-lg transition-all' onClick={handleClose}>
                            <div className='flex justify-center items-center px-15 rounded-2xl glass py-10'>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex justify-center items-center flex-col'>
                                        <h1 className="text-3xl text-center">Developed by <a href='https://www.roomi.dev' className='flex flex-nowrap justify-center text-orange-400 transition-all'>Roomi<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                        </a></h1>
                                        <p className='text-sm mt-2'>&copy; Copyleft (*￣▽￣)b</p>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Modal>
                </div>
            </div>
        </>
    )
}
