import { Component, isValidElement, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
// import { baseUrl } from "../commonApi/ReviewApi";
// import { click } from "@testing-library/user-event/dist/click";
import logo from "../images/star.png";

const ReviewComment = () => {
  const [ReviewComment, setReviewComment] = useState([]);
  const [pv, setPv] = useState({ currentPage: 1 });
  const { currentPage } = useParams;

  // useEffect(() => {
  //   getComment(currentPage ? currentPage : 1);
  // }, {});

  return (
    <div className="Reply_div">
      <h3> 후기 </h3>

      <div className="Star_ratings">
        <span>
          <img src={logo}></img>
        </span>
        <span>
          <img src={logo}></img>
        </span>
        <span>
          <img src={logo}></img>
        </span>
        <span>
          <img src={logo}></img>
        </span>
        <span>
          <img src={logo}></img>
        </span>
        <div className="present_ratings">
          <h3>4점</h3>
        </div>
      </div>

      <div className="Reply_write">
        <textarea
          rows="3"
          placeholder="후기를 작성해주세요."
          maxLength="100"
        ></textarea>
        <NavLink to="/detail" style={{ textDecoration: "none" }}>
          <input type="button" value="등록" className="reply_submit_button" />
        </NavLink>
        <h5> 작성된 후기가 없습니다. </h5>
        <ul>
          <li>
            <div className="Reply_list">
              <strong>다음에 또 이용하고 싶어요.</strong>
              <div className="Score_list">
                <div className="Score_star">
                  <span>
                    <img src={logo}></img>
                    <img src={logo}></img>
                    <img src={logo}></img>
                    <img src={logo}></img>
                    <img src={logo}></img>
                  </span>
                  <div className="Score_num">5.0</div>
                </div>
              </div>
              <div className="Reply_user">deluna</div>
              <div className="Reply_content">
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
                깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.깨끗하고
                청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReviewComment;
