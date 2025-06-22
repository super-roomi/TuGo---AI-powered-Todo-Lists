import React from 'react'
import { UserAuth } from '../AuthContext'
import { Navigate } from 'react-router'

const PrivateRoute = ({ children }) => {
    const { session } = UserAuth()

    if (session === undefined) {
        return <p>loading...</p>
    }
    return (
        <>{session ? <>{children}</> : <Navigate to={'/login'} />}</>

    )
}

export default PrivateRoute