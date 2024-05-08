import { FaTrash } from "react-icons/fa";
import { TodoUpdate } from "./TodoUpdate";
import styled from "styled-components";

export const TodoItem = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}) => {
  return (
    <Li>
      <span onClick={() => handleCompleteTodo(todo.id)}>
        <label
          className={`container-done ${todo.done ? "active" : ""}`}
        ></label>
      </span>
      <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
      <DeleteButton onClick={() => handleDeleteTodo(todo.id)}>
        <FaTrash />
      </DeleteButton>
    </Li>
  );
};

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  width: 35px;
  height: 35px;
  background-color: red;
  border: none;

  &:hover {
    font-size: 20px;
    color: blue;
  }
`;
