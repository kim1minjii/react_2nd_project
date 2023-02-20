import { Component, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { baseUrl } from "../commonApi/ReviewApi";
// import { AiFillStar } from "react-icons/ai";
import { click } from "@testing-library/user-event/dist/click";
import logo from "../images/star.png";

const ReviewComment = () => {
  const [revId] = useState("");
  const [userId] = useState("");
  const [comment, setComment] = useState("");
  const [CommentList, setCommentList] = useState([]);
  const [pv, setPv] = useState({ currentPage: 1 });

  // // 별점 기본값
  // const [clicked, setClicked] = useState([false, false, false, false, false]);

  // // 더미 배열을 통해 항상 별이 5개가 나오도록 설정
  // const array = [0, 1, 2, 3, 4];

  // // 클릭한 별의 index값이 rev_rating에 찍힌다.
  // {
  //   array.map((rev_rating) => (
  //     <ImStarFull
  //       key={rev_rating}
  //       onClick={() => handleStarClick(rev_rating)}
  //       className={clicked[rev_rating] && "black"}
  //       size="35"
  //     />
  //   ));
  // }

  // const handleStarClick = (index) => {
  //   let clickStates = [...clicked];
  //   for (let i = 0; i < 5; i++) {
  //     clickStates[i] = i <= index ? true : false;
  //   }
  //   setClicked(clickStates);
  // };

  // let score = clicked.filter(Boolean).length;

  // 댓글 작성 후 특정 위치로 이동
  const navigator = useNavigate();

  return (
    // 댓글 작성
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
          // name="write_reply"
          // _loginCheck함수를 댓글 입력창 및 등록 버튼에 이벤트 실행
          // onClick={() => loginCheck()}
        ></textarea>
        <NavLink to="/detail" style={{ textDecoration: "none" }}>
          <input type="button" value="등록" className="reply_submit_button" />
        </NavLink>
        <h5> 작성된 후기가 없습니다. </h5>
        <ul>
          <div className="Reply_list">
            <br />
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
              </div>
              <div className="Score_num">5.0</div>
            </div>
            <div className="Reply_user">deluna</div>
            <div className="Reply_content">
              깨끗하고 청결해서 좋았습니다. 다음에 또 이용하고 싶네요.
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

// 별점
// const StarRateWrap = styled.div`{
//   disp
// }`;
// function StarRate() {
//   return <StarRateWrap></StarRateWrap>;
// }

// 비로그인 시 로그인 모달 오픈 //
// const loginCheck = (e) => {};

// loginCheck = () => {
//   const { login, toggleModal } = this.props;

//   if (!login) {
//     alert("로그인이 필요합니다.");
//     toggleModal(true);

//     return false;
//   }
//   return true;
// };

export default ReviewComment;
