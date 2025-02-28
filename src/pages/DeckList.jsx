import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router";


function Decks() {
    const [decks, setDecks] = useState([])
    const location = useLocation()
    const [totalPages, setTotalPages] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const limit = 3


    useEffect(() => {
        fetchDecks()
    }, [currentPage, location.key]);
    async function fetchDecks(page = currentPage) {
        try {
            const response = await fetch( `http://145.24.223.204:8000/decks?page=${page}&limit=${limit}`, {
                // PAGINATION: ?page=${page}&limit=${limit}
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();
            console.log(data);
            setDecks(data.items);
            setTotalPages(data.totalPages)
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    }



    return (
        <>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8">
                {decks.map((deck) => (

                            <li
                                key={deck.id}
                                className="bg-gradient-to-br from-green-400 via-yellow-300 to-pink-500 shadow-2xl rounded-xl overflow-hidden transition-transform transform hover:skew-y-3 duration-500 border-4 border-dotted border-purple-700"
                            >
                                <div className="p-8">
                                    <Link to={`/decks/${deck.id}`}>
                                        <h2 className="text-3xl font-extrabold text-purple-800 tracking-wider  mb-4">
                                            {deck.title}
                                        </h2>

                                    <p className="text-2xl font-bold text-blue-700 italic mb-3"><strong className={"text-black"}>Price:</strong> ${deck.price}</p>
                                    <p className="text-xl font-semibold text-orange-600 mb-3"><strong className={"text-black"}>Size:</strong> {deck.size}</p>
                                    </Link>
                                </div>
                            </li>
                ))}
            </ul>

            <div className="flex justify-center items-center gap-6 p-8 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 rounded-3xl shadow-2xl transform">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className="bg-gradient-to-bl from-yellow-400 via-red-500 to-pink-500 text-white text-3xl font-bold py-4 px-8 rounded-full shadow-lg border-4 border-double border-purple-700 transform hover:scale-125 hover:-rotate-6 transition-transform duration-300 hover:bg-green-500"
                >
                    ⬅️ Previous
                </button>
                <span className="text-4xl font-extrabold text-white bg-black bg-opacity-70 px-6 py-4 rounded-lg shadow-inner transform rotate-2 tracking-wider">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    className="bg-gradient-to-bl from-blue-400 via-green-500 to-yellow-400 text-white text-3xl font-bold py-4 px-8 rounded-full shadow-lg border-4 border-dotted border-pink-700 transform hover:scale-125 hover:rotate-6 transition-transform duration-300 hover:bg-red-500"
                >
                    Next ➡️
                </button>
            </div>
        </>
    );

}

export default Decks


