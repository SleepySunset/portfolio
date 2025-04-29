import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Layout from "./layout/Layout";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
     <ScrollToTop />
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
    </>
    
  );
}

export default App;
