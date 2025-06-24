import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import LoopIcon from '@mui/icons-material/Loop';


export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[url('bg-img1.jpg')] flex items-center justify-center p-6 text-black">
            <div className="glass max-w-4xl w-full rounded-2xl shadow-xl p-10">
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-2">Tugo</h1>
                    <p className="text-lg">
                        Tell us what you want to do, and we'll build your day for you
                    </p>
                </header>

                <section className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Smart Task Planning</h2>
                        <p className=" mb-6">
                            Just describe your plans, and our AI will automatically generate a structured to-do list tailored to your needs.
                        </p>
                        <button onClick={() => navigate('/register')} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300">
                            Get Started!
                        </button>
                    </div>

                    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-md border border-white/20">
                        <h3 className="text-lg font-medium mb-4">Example Voice Input:</h3>
                        <p className=" italic mb-6">
                            "I want to wake up early, go for a jog, check emails, and finish my project."
                        </p>
                        <h3 className="text-lg font-medium mb-4">Generated To-Do List:</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                                <span className="">Wake up at 6:30 AM</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                                <span className="">Morning jog - 30 minutes</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-4 h-4 bg-orange-300 rounded-full"></div>
                                <span className="">Check and respond to emails</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
                                <span className="">Work on project task list</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}

