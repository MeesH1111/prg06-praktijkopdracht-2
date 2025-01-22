import {useNavigate, useParams} from "react-router";
import { useEffect, useState } from "react";

function DeckDetail() {
    const { id } = useParams(); // Destructure id directly from useParams
    const [deck, setDeck] = useState(null);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true); // Optional: for loading state
    const [error, setError] = useState(null); // Optional: for error handling

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
            setError(error.message); // Set error message
        } finally {
            setLoading(false); // Set loading to false
        }
    }

    useEffect(() => {
        fetchDeck();
    }, [id]); // Add id to the dependency array

    if (loading) {
        return <p>Loading...</p>; // Show loading state
    }

    if (error) {
        return <p>Error: {error}</p>; // Show error message
    }

    if (!deck) {
        return <p>No deck found.</p>; // Handle case where deck is not found
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
            setError(error.message); // Set error message
        } finally {
            setLoading(false); // Set loading to false
        }
    }

    const handleDelete = () => {
        deleteDeck(deck.id)
    }

    const handleEdit = () => {
        navigate(`/deck/edit/${id}`)
    }

    return (
        <article className="border rounded-lg shadow-lg p-6 bg-white hover:bg-gray-50 transition duration-300">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{deck.title}</h1>
            <h2 className="text-lg text-gray-600 mb-4">By {deck.price}</h2>
            <h2 className="text-gray-700">{deck.size}</h2>
            <p className="text-gray-700">{deck.body}</p>
            <button className="p-20" onClick={handleEdit}>EDIT</button>
            <button onClick={handleDelete}>DELETE</button>
        </article>
    );
}

export default DeckDetail;