import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from '../Home/Home';
import { UseReducer, UseRef } from '../Hooks';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} />
            <Route path="/hooks/usereducer" element={<UseReducer />} />
            <Route path="/hooks/useref" element={<UseRef />} />
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
