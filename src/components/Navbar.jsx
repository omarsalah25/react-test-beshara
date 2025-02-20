import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, ShoppingBasket, Menu, X } from 'lucide-react'; // Import X icon for close
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import { Avatar } from 'antd';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartItems = useSelector((state) => state.cart.items);
    const [items, setItems] = useState(cartItems);
    useEffect(() => {
        setItems(cartItems);
    }, [cartItems]);
    const isPathActive = (path) => {
        return window.location.pathname === path;
    }

    const linkVariants = {
        initial: { width: 0 },
        animate: { width: '100%' },
        exit: { width: 0 }
    }

    return (
        <nav className="p-5 shadow-md sticky bg-white top-0 z-50 flex justify-between items-center">
            {/* Desktop Menu */}
            <ul className="gap-5 hidden lg:flex">
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

            {/* Mobile Hamburger Icon */}
            <div className="lg:hidden flex items-center">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>
            </div>

            <div className="flex items-center space-x-4">
                <div className="flex items-center gap-2">
                    <Avatar size={32} className="mr-2" />
                    <span className="text-black/70 capitalize">Hello, john doe </span>
                </div>

                <Link to="/cart" className="flex items-center text-black relative font-semibold hover:text-black/60 transition duration-300 capitalize">
                    <ShoppingBasket size={24} />

                    {items.reduce((total, item) => total + item.quantity, 0) > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold px-1 rounded-full">
                            {items.reduce((total, item) => total + item.quantity, 0)}
                        </span>
                    )}

                </Link>

                <button className="bg-red-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-600 transition duration-300">
                    <LogOut className='text-white' size={24} />
                </button>
            </div>

            {/* Mobile Menu  */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md p-5 flex flex-col gap-5"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link to="/" className={`${isPathActive('/') ? 'text-black' : 'text-black/70'} font-semibold hover:text-black/80 transition duration-300`}>
                            Home
                        </Link>
                        <Link to="/about" className={`${isPathActive('/about') ? 'text-black' : 'text-black/70'} font-semibold hover:text-black/80 transition duration-300`}>
                            About
                        </Link>
                        <Link to="/contact" className={`${isPathActive('/contact') ? 'text-black' : 'text-black/70'} font-semibold hover:text-black/80 transition duration-300`}>
                            Contact Us
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
