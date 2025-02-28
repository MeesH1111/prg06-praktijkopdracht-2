import { Link, Outlet } from 'react-router'

function Layout() {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-green-500 to-yellow-500 min-h-screen">
            <nav className="flex justify-around items-center p-8 shadow-2xl rounded-lg bg-black bg-opacity-70 backdrop-blur-xl border-4 border-double border-purple-700 transform rotate-2 scale-105">
                <Link className="text-3xl font-extrabold text-white hover:text-red-500 transition-all duration-300 transform hover:skew-y-6 hover:scale-125" to={`/`}>
                    🏠 Home
                </Link>
                <Link className="text-3xl font-extrabold text-white hover:text-blue-300 transition-all duration-300 transform hover:-rotate-6 hover:scale-125" to={`/decks/create`}>
                    🛹 Add Deck
                </Link>
                <Link className="text-3xl font-extrabold text-white hover:text-yellow-300 transition-all duration-300 transform hover:skew-y-6 hover:scale-125" to={`/decks`}>
                    📜 Decks List
                </Link>
            </nav>
            <main className="p-10 bg-gradient-to-tl from-pink-500 via-purple-700 to-blue-900 shadow-inner rounded-lg">
                <Outlet />
            </main>
        </div>
    );
}
export default Layout