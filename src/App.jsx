import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/HomePage.jsx"
import Buy from "./pages/BuyPage.jsx"
import History from "./pages/HistoryPage.jsx"
import Admin from "./pages/Admin.jsx"

function App () {
    const appStyle = {
        background: 'linear-gradient(180deg, #0C152B 20%, #141F37 40%, #133146 70%)',
    }
    return (
        <BrowserRouter>
            <div style={appStyle}>
                <Header/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<History/>}/>
                    <Route path="/buy" element={<Buy/>} />
                    <Route path="/admin" element={<Admin/>} />
                </Routes>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;