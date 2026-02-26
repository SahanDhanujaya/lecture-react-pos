import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

interface AsideProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Aside = ({ isOpen, setIsOpen }: AsideProps) => {
    const menuItems = [
        { name: "Dashboard", link: "/user/dashboard" },
        { name: "Customers", link: "/user/customers" },
        { name: "Orders", link: "/user/orders" },
        { name: "Products", link: "/user/products" },
        { name: "Settings", link: "/user/settings" },
    ];
   const handleClose = () => {
        setIsOpen(false);
   }

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={handleClose}
                aria-hidden={!isOpen}
            />

            <aside className={`fixed top-0 left-0 z-50 w-64 h-screen bg-gray-800 text-white p-4 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">POS SYSTEM</h2>
                    <IoMdClose onClick={handleClose} className="text-xl cursor-pointer text-black hover:text-gray-400 rounded-full p-1 bg-amber-50/90 hover:transform hover:rotate-180 transition-transform duration-300" />
                </div>
                {
                    menuItems.map((item) => (
                        <Link key={item.name} to={item.link} className="block py-2 px-3 rounded bg-gray-700 mt-2 hover:bg-gray-600" onClick={handleClose}>{item.name}</Link>
                    ))
                }
            </aside>
        </>
    )
}
export default Aside