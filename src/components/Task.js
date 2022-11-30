import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Task = (props) => {
  return (
    <div
      className={`task ${props.task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => props.onToggle(props.task.id)}
    >
      <h3>
        {props.task.text}
        <FaTimes
          onClick={() => props.onDelete(props.task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{props.task.day}</p>
      <Link to={`/tasks/${props.task.id}`}>View Details</Link>
    </div>
  );
};

export default Task;
