import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import SingleOpen from "./components/SingleOpen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NewsList />
        <Routes>
          <Route path="/detail" element={<SingleOpen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
