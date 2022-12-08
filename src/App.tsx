import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NewsList from "./components/NewsList";
import SingleOpen from "./components/SingleOpen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/detail/:id" element={<SingleOpen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
