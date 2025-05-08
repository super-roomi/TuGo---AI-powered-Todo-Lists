import React from 'react'
import { useState, useEffect } from 'react'
import supabase from '../helper/SupabaseClient'
import { Navigate } from 'react-router'
import { ThreeDot } from 'react-loading-indicators'

function AuthWrapper({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();
            setIsAuthenticated(!!session);
            setIsLoading(false);
        };

        getSession();
    }, []);

    if (isLoading) {
        return <div className='flex justify-center items-center h-svh'>
            <ThreeDot color="#000000" size="large" text="loading" textColor="" />
        </div>
    } else {
        if (isAuthenticated) {
            return <>{children}</>
        }
        return <Navigate to='/login' />
    }
}

export default AuthWrapper