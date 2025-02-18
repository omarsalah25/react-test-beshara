import React from 'react'

const GuestLayout = ({ children }) => {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
            {children}
        </div>
    )
}

export default GuestLayout