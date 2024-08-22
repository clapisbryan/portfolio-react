import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from '../Home/Home';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} />
        </>
    )
)

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
