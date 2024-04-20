import React from "react";
import ConditionCard from "./ConditionCard";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { changeWeek, resetWeek } from "../redux/slices/condition";
import { styled } from "styled-components";

const MainPage = () => {
  const dispatch = useDispatch();
  const baseDay = useSelector((state) => state.condition.baseDay);
  const today = dayjs(baseDay);

  return (
    <MainPageDiv>
      <h1>Main Page</h1>

      <ConditionListDiv>
        {[0, 1, 2, 3, 4, 5, 6].map((dayAfter) => (
          <ConditionCard
            key={today.add(dayAfter, "day").toDate()}
            dayAfter={dayAfter}
          />
        ))}
      </ConditionListDiv>

      <ButtonsDiv>
        <button
          onClick={() => {
            dispatch(changeWeek(-1));
          }}
        >
          ← last week
        </button>

        <button
          onClick={() => {
            dispatch(resetWeek());
          }}
        >
          today
        </button>

        <button
          onClick={() => {
            dispatch(changeWeek(+1));
          }}
        >
          next week →
        </button>
      </ButtonsDiv>
    </MainPageDiv>
  );
};

const MainPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;

const ConditionListDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 80%;
`;

const ButtonsDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5%;
  border: none;
  & > button {
    font-size: 20px;
    padding: 5px 20px;
    flex-basis: auto;
    color: #fff;
    background-color: black;
  }
`;

export default MainPage;
