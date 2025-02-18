import { Link } from 'react-router-dom'
import { LogOut, ShoppingBasket } from 'lucide-react'
import { motion } from 'framer-motion'
import { Avatar } from 'antd'

const Navbar = () => {
    const isPathActive = (path) => {
        return window.location.pathname === path
    }

    const linkVariants = {
        initial: { width: 0 },
        animate: { width: '100%' },
        exit: { width: 0 }
    }

    return (
        <nav className="p-4 shadow-md sticky bg-white top-0 z-50 flex justify-between items-center">
            <ul className="flex space-x-6">
                <li className="relative">
                    <Link to="/" className={`${isPathActive('/') ? 'text-black' : 'text-black/70'} font-semibold hover:text-black/80 transition duration-300 capitalize`}>
                        Home
                    </Link>
                    {isPathActive('/') && (
                        <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-black"
                            variants={linkVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        />
                    )}
                </li>
                <li className="relative">
                    <Link to="/about" className={`${isPathActive('/about') ? 'text-black' : 'text-black/70'} font-semibold hover:text-black/80 transition duration-300 capitalize`}>
                        About
                    </Link>
                    {isPathActive('/about') && (
                        <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-black"
                            variants={linkVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        />
                    )}
                </li>
                <li className="relative">
                    <Link to="/contact" className={`${isPathActive('/contact') ? 'text-black' : 'text-black/70'} font-semibold hover:text-black/80 transition duration-300 capitalize`}>
                        Contact Us
                    </Link>
                    {isPathActive('/contact') && (
                        <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-black"
                            variants={linkVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        />
                    )}
                </li>
            </ul>

            <div className="flex items-center space-x-4">
                <div className="flex items-center gap-2" >
                    <Avatar size={32} className="mr-2" />
                    <span className="text-/70">Hello, </span>
                </div>

                <Link
                    to="/cart"
                    className="flex items-center text- font-semibold hover:text-black/60 transition duration-300 capitalize"
                >
                    <ShoppingBasket size={24} />
                </Link>

                <button
                    // onClick={onLogout}
                    className="bg-red-500 px-4 py-2 rounded-lg text- font-semibold hover:bg-red-600 transition duration-300"
                >
                    <LogOut className='text-white' size={24} />
                </button>
            </div>
        </nav>
    )
}

export default Navbar
