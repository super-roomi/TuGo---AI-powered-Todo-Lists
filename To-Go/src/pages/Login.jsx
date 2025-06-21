import { useState } from 'react'
import supabase from '../helper/SupabaseClient'
import { AuthContextProvider } from '../AuthContext'
import { UserAuth } from '../AuthContext'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'


function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const { session, signInUser } = UserAuth();

    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault()

        setLoading(true)
        try {
            const result = await signInUser(email, password)

            if (result.success) {
                navigate('/dashboard')
            }
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }


    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     setMessage("")

    //     const { data, error } = await supabase.auth.signUp({
    //         email: email,
    //         password: password
    //     })

    //     if (error) {
    //         setMessage(error.message)
    //         return;
    //     }
    //     if (data) {
    //         setMessage("Account Created Successfully.")
    //         alert("A verification email has been sent to your inbox. Please confirm your email or else you won't be able to log in.")
    //     }

    //     setEmail("")
    //     setPassword("")
    // }
    return (
        <div className="flex justify-center items-center h-svh bg-[url('/pexels-diva-31804635.jpg')] bg-no-repeat bg-cover bg-center">
            <div className='flex flex-col lg:flex-row justify-center items-center gap-x-15 border p-10 rounded-2xl glass'>
                <h1 className='text-5xl p-5'>Login</h1>
                {error && <p className='text-red-500 text-center p-2'>There was an error: {error}</p>}
                {loading ? <p className='animate-spin text-4xl'>+</p> : <form onSubmit={handleSignIn}>
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
                        <button className='p-1 border-1 rounded-xl mt-3 hover:cursor-pointer hover:scale-102 hover:text-white hover:bg-black transition-all' type='submit'>Log in</button>
                    </div>
                    <p className='ml-2'>No account? <Link className='underline' to={'/register'}>Sign up here</Link> </p>

                </form>}
            </div>
        </div>
    )
}

export default Register