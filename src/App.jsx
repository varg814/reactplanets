import "./App.scss";
import Planets from "./pages/Planet/Planets";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter as Router, Routes, Route} from "react-router";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/Planets/:name" element={<Planets />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
