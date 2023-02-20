import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ReviewUpdate = (e) => {
  const navigator = useNavigate();
  const { currentPage, num } = useParams();

  const [initReview, setInitReview] = useState({});
  const [inputs, setInputs] = useState({});
};

export default ReviewUpdate;
