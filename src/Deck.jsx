function Deck({ title, price, size, body }) {
    return (
        <article className="border-4 border-dashed border-red-500 rounded-lg shadow-2xl p-6 bg-gradient-to-br from-green-400 via-yellow-300 to-pink-600 hover:from-pink-600 hover:to-green-400 hover:rotate-3 hover:scale-110 transition-transform duration-500">
            <h1 className="text-4xl font-extrabold text-purple-800 mb-2 underline tracking-widest transform rotate-6">
                {title}
            </h1>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4 italic animate-pulse">{price}</h2>
            <h2 className="text-2xl font-semibold text-orange-500 mb-4 italic animate-bounce">{size}</h2>
            <p className="text-yellow-50 bg-black bg-opacity-40 p-4 rounded-lg shadow-inner tracking-wider">
                {body}
            </p>
        </article>
    );
}

export default Deck