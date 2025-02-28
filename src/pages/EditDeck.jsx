import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";

const EditDeck = (onUpdate) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [decks, setDecks] = useState()
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        size: '',
        body: '',
        order: ''
    });

    useEffect(() => {
        fetchDecks()
    }, [id]);

    const fetchDecks = async () => {
        try {
            const response = await fetch(`http://145.24.223.204:8000/decks`, {
                method: 'GET',
                headers: {
                    'accept': 'application/json'
                }
            });
            const data = await response.json();
            setDecks(data.items);
            const deckToEdit = data.items.find(deck => deck.id === id);
            if (deckToEdit) {
                setFormData({
                    title: deckToEdit.title,
                    price: deckToEdit.price,
                    size: deckToEdit.size,
                    body: deckToEdit.body,
                    order: deckToEdit.order
                });
            }
        } catch (error) {
            console.error('Er is een fout opgetreden:', error)
        }
    };

    const handleInputChange = (edit) => {
        const { name, value } = edit.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (edit) => {
        edit.preventDefault();
        try {
            const response = await fetch(`http://145.24.223.204:8000/decks/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                navigate('/decks')
                onUpdate({ id: parseInt(id), ...formData})
            }

        } catch (error) {
            console.log(error)
        }
    };



    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size:</label>
                <input
                    type="text"
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="body" className="block text-sm font-medium text-gray-700">Body:</label>
                <input
                    type="text"
                    id="body"
                    name="body"
                    value={formData.body}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2 pb-20"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="order" className="block text-sm font-medium text-gray-700">Order link:</label>
                <input
                    type="url"
                    id="order"
                    name="order"
                    value={formData.order}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2 pb-20"
                    required
                />
            </div>
            <button type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200">
                Edit
            </button>
        </form>
    );
}

export default EditDeck;