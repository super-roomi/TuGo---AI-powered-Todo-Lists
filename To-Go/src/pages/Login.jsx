import React from 'react'
import supabase from '../helper/SupabaseClient'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        setMessage("")

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })

        if (error) {
            setMessage(error.message)
            setEmail("")
            setPassword("")
            return;
        }
        if (data) {
            setMessage("Welcome.")
            localStorage.setItem("token")
            navigate("/dashboard")
        }


    }
    return (
        <div className="flex justify-center items-center h-svh bg-[url('/pexels-diva-31804635.jpg')] bg-center bg-no-repeat bg-cover">
            <div className='flex flex-col lg:flex-row justify-center items-center gap-x-15 border p-10 rounded-2xl glass '>
                <h1 className='text-5xl p-5'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-y-3'>
                        <input
                            className='p-2 glass rounded-full'
                            name='email'
                            onChange={(e) => { setEmail(e.target.value) }}
                            value={email}
                            type="email" placeholder='Email' />
                        <input
                            className='p-2 glass rounded-full'
                            name='password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder='Password' />

                        <button className='p-1 border-1 rounded-xl mt-1 hover:cursor-pointer' type='submit'>Login</button>
                    </div>

                    {message && <span className='text-red-600'>{message}</span>}
                    <p>Don't have an account? <a className='underline' href="/register"> Register here</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login