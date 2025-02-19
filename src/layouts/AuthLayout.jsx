import Navbar from '../components/Navbar'
import { AnimatePresence, motion } from 'framer-motion'

const transition = {
    duration: 0.8,
    delay: 0.3,
    ease: 'anticipate',
}

const AuthLayout = ({ children }) => {
    return (
        <>
            <Navbar />

            <div className='flex flex-col items-center min-h-screen bg-gray-100'>
                <AnimatePresence>
                    <motion.div
                        className='!p-0 w-full'
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={transition}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    )
}

export default AuthLayout
