import { Routes, BrowserRouter, Route } from "react-router-dom";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
