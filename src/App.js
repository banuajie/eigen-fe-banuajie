// import "./App.css";
import "./assets/css/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="article" element={<ArticlePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
