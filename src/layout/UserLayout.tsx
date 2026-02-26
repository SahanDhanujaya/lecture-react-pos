import { useState } from "react";
import Aside from "../components/Aside"
import { IoMenu } from "react-icons/io5";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenuClick = () => {
        setIsOpen(true);
    }
    
    return (
        <div className="p-4 relative">
            <div className="m-2 rounded shadow bg-gray-100 p-3 flex items-center justify-between">
                <button onClick={handleMenuClick} className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"><IoMenu /></button>
            </div>
            <div>
                <Outlet />
            </div>
            <div className="absolute top-0 left-0">
                <Aside isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    )
}

export default UserLayout