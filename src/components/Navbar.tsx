import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
    const { theme, toggleTheme} = useContext(ThemeContext);    
    const navItems = [
        { name: 'Home', path: '/home' },
        { name: 'Products', path: '/products' },
        { name: 'Contact', path: '/contact' }
    ]

    useEffect(() => {
        console.log(theme)
    }, [theme])
    return (
        <nav className={ theme === "light" ? "bg-white text-black flex justify-between items-center p-4 shadow " : "bg-gray-800 text-white flex justify-between items-center p-4 " }>
                <h1 className="text-xl">logo</h1>
                <ul className="flex space-x-4">
                    {navItems.map((item) => (
                        <li key={item.name} className="cursor-pointer hover:text-gray-400 hover:bg-black/90 hover:backdrop-blur-2xl py-1 px-1 rounded-md"><Link to={item.path}>{item.name}</Link></li>
                    ))}
                
                </ul>
                <button className="rounded bg-gray-600 text-white px-4 py-2"><Link to="/user">Dashboard</Link></button>
                <button className="rounded bg-gray-600 text-white px-4 py-2" onClick={toggleTheme}>Change Theme</button>
        </nav>
    )
}
export default Navbar;