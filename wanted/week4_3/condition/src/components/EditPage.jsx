import React from "react";
import EditCard from "./EditCard";
import styled from "styled-components";
import { ButtonsDiv, HeaderDiv } from "./MainPage";
import { StyeldLink } from "./ConditionCard";
import { useDispatch, useSelector } from "react-redux";
import { inputConditionToday } from "../redux/slices/condition";
import { useParams } from "react-router-dom";
import putData from "../network/putData";

const EditPage = () => {
  const dispatch = useDispatch();
  const { date } = useParams();

  const conditionToday = useSelector((state) => state.condition.conditionToday);

  return (
    <EditPageDiv>
      <HeaderDiv>Edit page</HeaderDiv>
      <EditCard />
      <ButtonsDiv>
        <StyeldLink to="..">← Back</StyeldLink>
        <button onClick={() => dispatch(inputConditionToday(0))}>Reset</button>
        <button
          onClick={() => {
            putData(date, conditionToday);
            alert("Condition Saved!!");
          }}
        >
          Save
        </button>
      </ButtonsDiv>
    </EditPageDiv>
  );
};

const EditPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  text-align: center;
`;

export default EditPage;
