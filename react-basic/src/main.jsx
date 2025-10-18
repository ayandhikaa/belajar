import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomeView from './page/HomeView.jsx'
import AboutView from './page/AboutView.jsx'
import ContactView from './page/ContactView.jsx'
import TodoView from './page/TodoView.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomeView />
            },
            {
                path: "about",
                element: <AboutView />
            },
            {
                path: "contact",
                element: <ContactView />
            },
            {
                path: "todo",
                element: <TodoView />
            }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
