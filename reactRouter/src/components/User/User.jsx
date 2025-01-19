import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { userId } = useParams()
    return (
        <div className='bg-orange-500 text-black text-3xl text-center py-5 '> <p>User:{userId}</p></div>
    )
}

export default User