import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from './Layout.jsx';
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import DeckList from "./pages/DeckList.jsx";
import CreateDeck from "./pages/CreateDeck.jsx";
import DeckDetail from "./pages/DeckDetail.jsx";
import EditDeck from "./pages/EditDeck.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import DeckNotFound from "./pages/DeckNotFound.jsx";



const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/decks',
                element: <DeckList/>
            },
            {
                path: '/decks/create',
                element: <CreateDeck/>
            },
            {
                path: '/decks/:id',
                element: <DeckDetail/>
            },
            {
                path: '/deck/edit/:id',
                element: <EditDeck/>
            },
            {
                path: '/deck-not-found',
                element: <DeckNotFound/>
            },
            {
                path: '*',
                element: <PageNotFound/>
            },
            {
                path: '/decks/*',
                element: <DeckNotFound/>
            },
        ]
    }
])
function App() {
    return <RouterProvider router={router}/>
}

export default App
