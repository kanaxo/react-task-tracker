import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const TaskDetails = () => {
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const data = await res.json();

      if (res.status === "404") {
        navigate("/");
      }

      setTask(data);
      setLoading(false);
    };
    getData();
  }, []);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <p> {location.pathname}</p>
      <p>{task.text}</p>
      <p>{task.day}</p>
      <Button
        text="Go back"
        onClick={() => {
          navigate(-1);
        }}
      />
    </div>
  );
};

export default TaskDetails;
