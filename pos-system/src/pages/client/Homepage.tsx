

const Home = () => {
    return(
        <div className="text-black">
            <div id="home" className="w-full h-100 flex flex-col items-center justify-center bg-gray-200">
                <h1 className="text-3xl font-bold">POS-SYSTEM</h1>
                <input className="border w-100 border-gray-600 p-2 rounded-2xl focus:outline-none" type="search" placeholder="🔍search something" />
            </div>
        </div>
    )
}
export default Home