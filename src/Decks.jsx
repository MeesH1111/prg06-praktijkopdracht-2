import Deck from "./Deck.jsx";
import {useEffect, useState} from "react";


function Decks() {
    const [decks, setDecks] = useState([])

    useEffect(() => {
        fetchDecks
    }, []);

    async function fetchDecks(){
        try {
            const response = await fetch('', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await response.json()
            console.log(data)
            setDecks(data.items)
        } catch (error) {
            console.log('Er is een fout opgetreden', error)
        }
    }

    return(
        <>
            <ul>
                {decks.map((deck) => (
                    <Deck key={deck.id} title={deck.title} price={deck.price} size={deck.size} body={deck.body}/>
                ))}
            </ul>
        </>
    )
}

export default Decks