import {useNavigate, useParams} from "react-router";
import { useEffect, useState } from "react";

function DeckDetail() {
    const { id } = useParams();
    const [deck, setDeck] = useState(null);
    const navigate = useNavigate();

    async function fetchDeck() {
        try {
            const response = await fetch(`http://145.24.223.204:8000/decks/${id}`, {
                method: "GET",
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();

            setDeck(data);
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    }

    useEffect(() => {
        fetchDeck();
    }, [id]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!deck) {
                navigate('/deck-not-found');
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [deck, navigate]);

    if (!deck) {
        return <p className="text-center">Deck wordt geladen...</p>;
    }
    async function deleteDeck() {
        try {
            const response = await fetch(`http://145.24.223.204:8000/decks/${id}`, {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json'
                }
            });

            navigate('/decks')
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    }

    const handleDelete = () => {
        deleteDeck(deck.id)
    }

    const handleEdit = () => {
        navigate(`/deck/edit/${id}`)
    }

    return (
        <article className="border-4 border-blue-400 rounded-3xl shadow-lg p-6 bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 transition-all duration-300 ease-in-out max-w-lg mx-auto">
            <h1 className="text-4xl font-extrabold text-blue-800 mb-4 tracking-wide">
                {deck.title}
            </h1>

            <h2 className="text-2xl font-semibold text-green-700 mb-4">
                ${deck.price}
            </h2>

            <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 uppercase tracking-widest">
                    Size
                </h3>
                <p className="text-lg font-medium text-purple-700">{deck.size}</p>
            </div>

            <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 rounded-full my-4"></div>

            <p className="text-gray-700 leading-relaxed mb-6">
                {deck.body}
            </p>

            <a
                href={deck.order}
                target={"_blank"}
                className="block bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg hover:from-pink-600 hover:to-yellow-600 hover:shadow-xl transition-transform transform hover:scale-105 text-center"
            >
                🛒 Order Now
            </a>

            <div className="flex justify-between items-center mt-6">
                <button
                    className="px-6 py-2 text-sm font-medium text-white bg-purple-500 rounded-full shadow hover:bg-purple-600 hover:shadow-md transition-transform transform hover:scale-105"
                    onClick={handleEdit}
                >
                    ✏️ Edit
                </button>
                <button
                    className="px-6 py-2 text-sm font-medium text-white bg-red-500 rounded-full shadow hover:bg-red-600 hover:shadow-md transition-transform transform hover:scale-105"
                    onClick={handleDelete}
                >
                    ❌ Delete
                </button>
            </div>
        </article>
    );
}

export default DeckDetail;