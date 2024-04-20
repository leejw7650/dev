import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { inputConditionToday } from "../redux/slices/condition";

const EditCard = () => {
  const dispatch = useDispatch();
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
    <div>
      {starList.map((bin, idx) => (
        <StyledStarButton
          key={idx}
          onClick={() => {
            dispatch(inputConditionToday(idx + 1));
          }}
        >
          {bin ? "★" : "☆"}
        </StyledStarButton>
      ))}
      <div>
        <button onClick={() => dispatch(inputConditionToday(0))}>초기화</button>
        <button>저장</button>
      </div>
    </div>
  );
};

const StyledStarButton = styled.button`
  font-size: 50px;
  padding: 2px;
  background: none;
  border: none;
`;

export default EditCard;
