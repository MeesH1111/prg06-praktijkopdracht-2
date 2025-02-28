import {useState} from "react";
import {useNavigate} from "react-router";

function CreateDeck(onAddDeck) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        size: '',
        body: '',
        order: '',
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Formulier verzonden:', formData);

        try {
            const response = await fetch('http://145.24.223.204:8000/decks', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formData),

            });
            console.log(formData);

            navigate('/decks')
            const newDeck = await response.json();
            onAddDeck(newDeck);
            setFormData({ title: '', price: '', size: '', body: '', order: ''});
        } catch (error) {
            console.error('Er is een fout opgetreden:', error)
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
                    type="number"
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
                    type="number"
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
                Create
            </button>
        </form>
    );
}

export default CreateDeck