import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { inputConditionToday } from "../redux/slices/condition";
import { useParams } from "react-router-dom";

const EditCard = () => {
  const dispatch = useDispatch();
  const { date } = useParams();
  const conditionToday = useSelector((state) => state.condition.conditionToday);
  const starList = [
    ...Array(conditionToday).fill(1),
    ...Array(5 - conditionToday).fill(0),
  ];

  window.onkeydown = (e) => {
    let pressedKey = parseInt(e.key);
    if (0 <= pressedKey && pressedKey <= 5) {
      dispatch(inputConditionToday(pressedKey));
    }
  };

  return (
    <EditCardDiv>
      <span>{date}</span>
      <StarButtonsDiv>
        {starList.map((bin, idx) => (
          <button
            key={idx}
            onClick={() => {
              dispatch(inputConditionToday(idx + 1));
            }}
          >
            {bin ? "★" : "☆"}
          </button>
        ))}
      </StarButtonsDiv>
    </EditCardDiv>
  );
};

const EditCardDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-evenly;
  font-size: 20px;
  text-align: center;
  height: 50%;
  & > span {
    font-size: 25px;
    margin-top: 15px;
  }
`;

const StarButtonsDiv = styled.div`
  & > button {
    font-size: 50px;
    padding: 2px;
    background: none;
    border: none;
  }
`;

export default EditCard;
