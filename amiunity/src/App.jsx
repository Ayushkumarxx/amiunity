import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
