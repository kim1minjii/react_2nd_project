import { Route, Routes } from "react-router-dom";
import "./App.css";
import ReviewComment from "./review_detail/ReviewComment";
import ReviewUpdate from "./review_detail/ReviewUpdate";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/detail" element={<ReviewComment />} />
        <Route path="/detail" element={<ReviewUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
