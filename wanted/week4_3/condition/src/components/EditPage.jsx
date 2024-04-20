import React from "react";
import EditCard from "./EditCard";
import { Link, useParams } from "react-router-dom";

const EditPage = () => {
  const { date } = useParams();

  return (
    <div>
      <h3>edit page</h3>
      <h4>{date}</h4>
      <Link to="..">뒤로</Link>
      <EditCard />
    </div>
  );
};

export default EditPage;
