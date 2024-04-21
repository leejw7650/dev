import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import request from "../network/request";
import postData from "../network/postData";
import { inputConditionToday } from "../redux/slices/condition";

const ConditionCard = ({ dayAfter }) => {
  const dispatch = useDispatch();
  const [conditionToday, setConditionToday] = useState(0);
  const baseDay = useSelector((state) => state.condition.baseDay);
  const weekDiff = useSelector((state) => state.condition.weekDiff);
  const today = dayjs(baseDay).add(dayAfter, "day").add(weekDiff, "week");
  const isToday = dayjs(baseDay).isSame(today);

  const year = today.year();
  const month = String(today.month() + 1).padStart(2, "0");
  const date = String(today.date()).padStart(2, "0");
  const dayList = ["일", "월", "화", "수", "목", "금", "토"];
  const day = dayList[today.day()];

  const fetchData = async function (date) {
    try {
      const result = await request(date);
      return result;
    } catch {
      console.error("Error fetching data");
    }
  };

  const addData = async function (date) {
    try {
      const result = await postData(date);
      console.log(result);
    } catch {
      console.error("Error adding data");
    }
  };

  useEffect(() => {
    fetchData(`${year}-${month}-${date}`).then((response) => {
      if (response.data.length !== 0) {
        setConditionToday(response.data[0].rate);
      } else {
        addData(`${year}-${month}-${date}`);
      }
    });
  });

  return (
    <ConditionCardDiv>
      <DateDiv isToday={isToday}>
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
      <StyeldLink
        to={`/edit/${today.format("YYYY-MM-DD")}`}
        onClick={() => {
          dispatch(inputConditionToday(conditionToday));
        }}
      >
        Edit
      </StyeldLink>
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
  color: ${(props) => (props.isToday ? "#ff0000" : "#000")};
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
  font-size: 20px;
  text-decoration: none;
  padding: 5px;
  color: #fff;
  background-color: black;
`;

export default ConditionCard;
export { StyeldLink };
