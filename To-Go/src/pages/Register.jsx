import { useState } from 'react'
import supabase from '../helper/SupabaseClient'


function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        setMessage("")

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        })

        if (error) {
            setMessage(error.message)
            return;
        }
        if (data) {
            setMessage("Account Created Successfully.")
            alert("A verification email has been sent to your inbox. Please confirm your email or else you won't be able to log in.")
        }

        setEmail("")
        setPassword("")
    }
    return (
        <div className="flex justify-center items-center h-svh bg-[url('/pexels-pok-rie-33563-2894260.jpg')] bg-no-repeat bg-cover bg-center">
            <div className='flex flex-col lg:flex-row justify-center items-center gap-x-15 border p-10 rounded-2xl glass'>
                <h1 className='text-5xl p-5'>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-y-3'>
                        <input
                            className='p-2 glass rounded-full'
                            onChange={(e) => { setEmail(e.target.value) }}
                            value={email}
                            type="email" placeholder='Email' />
                        {message && <span>{message}</span>}
                        <input
                            className='p-2 glass rounded-full'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder='Password' />
                        <button className='p-1 border-1 rounded-xl mt-3 hover:cursor-pointer hover:scale-102 hover:text-white hover:bg-black transition-all' type='submit'>Create Account</button>
                    </div>
                    <p className='ml-2'>Aleady have an account? <a className='underline' href="/login">login here</a></p>
                </form>
            </div>
        </div>
    )
}

export default Register