import { useState, createContext, useContext, useEffect } from "react";
import supabase from "./helper/SupabaseClient";

const authContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [session, setSession] = useState(undefined)

    const signUpNewUser = async (email, password) => {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        })

        if (error) {
            console.error("there was an error: ", error)
            return { success: false, error: error.message }
        }
        return { success: true, data }
    }

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            console.log(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

    const signInUser = async (email, password) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })
            if (error) {
                console.error("error! ", error)
                return { success: false, error: error.message }
            }

            console.log("sign in success!", data)
            return { success: true, data }

        } catch (error) {
            console.error("error happened!", error)
        }
    }

    const signOut = () => {
        const { error } = supabase.auth.signOut()
        if (error) {
            console.log(error)
        }
    }

    return (
        <authContext.Provider value={{ session, signUpNewUser, signOut, signInUser }}>
            {children}
        </authContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(authContext)
}
