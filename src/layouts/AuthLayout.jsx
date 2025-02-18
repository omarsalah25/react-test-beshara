import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

const transition = {
    duration: 0.8,
    delay: 0.3,
    ease: 'anticipate',
}
const AuthLayout = ({ children }) => {
    return (<>
        <Navbar />
        <div className='flex flex-col items-center  min-h-screen bg-gray-100'>
            <motion.div
                className='!p-0 w-full'
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.9 }}
                transition={transition}
            >
                {children}
            </motion.div>


        </div >
    </>
    )
}

export default AuthLayout