import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import NotFound from "./pages/notFound/NotFound";
import Blogs from "./pages/blogs/Blogs";
import NavbarSection from "./components/NavbarSection";

function App() {
    return (
        <Router>
            <NavbarSection loggedIn={true} Name={"asghar"} />
            <div className="App">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;