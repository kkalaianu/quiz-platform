import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getName, playQuiz } from "../../Redux/Actions/Actions";
import { Container } from "@mui/material";
import "./PlayQuizStyle.css";

const PlayQuiz = () => {
  const quiz = useSelector((state) => state.reducer.quiz);
  const name = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const play = (id) => {
    if (name.current.value === "") {
      
      alert("Enter Your Name!");
      return;
    }
    if (name.current.value.length < 5 || name.current.value > 50) {
      
      return alert("Enter Valid Name Between 5 and 50 Characters!");
    } else {
      
      dispatch(getName(name.current.value));
      dispatch(playQuiz(id));
      navigate("/QuizCard");
    }
  };
  return (
      <Container>
        <div className="PlayQuiz-Box">
          <div className="PlayQuiz-Title">
            <h1>Play Quiz</h1>
          </div>
          <div className="PlayQuiz-Desc">
            <p>Enter Your Name And Choose One Quiz in Below</p>
            <div className="GoodLuck"></div>
            <div className="input-name">
              <div className="Quiz-Name">
                <label>Enter Your Name</label>
                <input
                  type="text"
                  ref={name}
                  placeholder={"Enter Your Name"}
                  autoFocus
                  className="input-name-text"
                />
              </div>
            </div>
            <div className="created-quiz">
              {quiz.length === 0 ? (
                <p>There are Currently No Quiz Added!</p>
              ) : (
                <div>
                  <div className="PlayQuiz-ViewOption">
                    {quiz
                      .filter((el) => el.isActive === true)
                      .map((el) => (
                        <div
                          className="PlayQuiz-Option"
                          onClick={() => {
                            play(el.id);
                          }}
                          key={el.id}
                        >
                          <h4>{el.title}</h4>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    
  );
};

export default PlayQuiz;
