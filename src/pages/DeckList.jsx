import Deck from "./DeckDetail.jsx";
import {useEffect, useState} from "react";
import {Link} from "react-router";

function Decks() {
    const [decks, setDecks] = useState([])

    useEffect(() => {
        fetchDecks()
    }, []);
    async function fetchDecks() {
        try {
            const response = await fetch('http://145.24.223.204:8000/decks', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();
            console.log(data);
            setDecks(data.items);
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    }

    // const showNotes = notes.map((note) => <Note key={note.id} >)

    return (
        <>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8">
                {decks.map((deck) => (
                    <li
                        key={deck.id}
                        className="bg-gradient-to-br from-green-400 via-yellow-300 to-pink-500 shadow-2xl rounded-xl overflow-hidden transition-transform transform hover:scale-125 hover:rotate-3 hover:skew-y-6 duration-500 border-4 border-dotted border-purple-700"
                    >
                        <div className="p-8">
                            <h2 className="text-3xl font-extrabold text-purple-800 underline tracking-wider transform rotate-6 mb-4">
                                {deck.title}
                            </h2>
                            <p className="text-2xl font-bold text-blue-700 italic animate-pulse mb-3"><strong className={"text-black"}>Price:</strong> ${deck.price}</p>
                            <p className="text-xl font-semibold text-orange-600 mb-3 animate-bounce"><strong className={"text-black"}>Size:</strong> {deck.size}</p>
                            <p className="text-yellow-50 bg-black bg-opacity-50 p-4 rounded-lg shadow-inner tracking-wide">
                                {deck.body}
                            </p>
                        </div>
                        <Link
                            to={`/decks/${deck.id}`}
                            className="block bg-gradient-to-r from-purple-600 via-red-400 to-yellow-500 text-white text-center py-4 text-2xl font-bold rounded-b-xl hover:bg-black hover:text-yellow-300 hover:scale-110 transition-all duration-300"
                        >
                            🚀 View Deck
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );

}

export default Decks


