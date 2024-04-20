import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ConditionCard = ({ dayAfter }) => {
  const baseDay = useSelector((state) => state.condition.baseDay);
  const weekDiff = useSelector((state) => state.condition.weekDiff);
  const today = dayjs(baseDay).add(dayAfter, "day").add(weekDiff, "week");

  const year = today.year();
  const month = today.month() + 1;
  const date = today.date();
  const dayList = ["일", "월", "화", "수", "목", "금", "토"];
  const day = dayList[today.day()];

  // request condition from mockAPI
  // and remove code below
  const conditionToday = useSelector((state) => state.condition.conditionToday);

  return (
    <ConditionCardDiv>
      <DateDiv>
        <span className="year">{year}</span>
        <span>/</span>
        <span className="month">{month}</span>
        <span>/</span>
        <span className="date">{date}</span>
        <span className="{day">({day})</span>
      </DateDiv>
      <StarListDiv>
        {conditionToday ? "★".repeat(conditionToday) : "-"}
      </StarListDiv>
      <StyeldLink to={`/edit/${today.format("YYYYMMDD")}`}>수정</StyeldLink>
    </ConditionCardDiv>
  );
};

const ConditionCardDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  font-size: 20px;
  text-align: center;
  gap: 5%;
`;

const DateDiv = styled.div`
  margin: auto 3px;
  flex-basis: 10em;
  display: flex;
  justify-content: space-between;
  /* gap: %; */
  & > .year {
    width: 40%;
  }
  & > .month {
    width: 20%;
  }
  & > .date {
    width: 20%;
  }
  & > .day {
    width: 20%;
  }
`;

const StarListDiv = styled.div`
  margin: auto 3px;
  flex-basis: 7em;
  font-size: 30px;
  text-align: left;
`;

const StyeldLink = styled(Link)`
  flex-basis: 4em;
  text-decoration: none;
  padding: 5px;
  color: #fff;
  background-color: black;
`;

export default ConditionCard;
