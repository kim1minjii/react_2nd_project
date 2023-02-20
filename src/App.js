import { Route, Routes } from "react-router-dom";
import "./App.css";
import ReviewComment from "./review_detail/ReviewComment";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="" element={<ReviewComment />} />
      </Routes>
    </div>
  );
}

export default App;
