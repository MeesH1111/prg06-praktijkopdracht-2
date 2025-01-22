import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from './Layout.jsx';
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import DeckList from "./pages/DeckList.jsx";
import CreateDeck from "./pages/CreateDeck.jsx";
import DeckDetail from "./pages/DeckDetail.jsx";
import EditDeck from "./pages/EditDeck.jsx";



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
        ]
    }
])
function App() {
    return <RouterProvider router={router}/>
}

export default App
