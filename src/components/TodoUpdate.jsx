import { useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useForm } from "../hooks/useForm";
import styled from "styled-components";

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
  const { updateDescription, onInputChange } = useForm({
    updateDescription: todo.description,
  });

  const [disabled, setDisabled] = useState(true);
  const focusInputRef = useRef();

  const onSubmitUpdate = (e) => {
    e.preventDefault();

    const id = todo.id;
    const description = updateDescription;

    handleUpdateTodo(id, description);

    setDisabled(!disabled);

    focusInputRef.current.focus();
  };

  return (
    <form onSubmit={onSubmitUpdate}>
      <ItemInput
        type="text"
        className={`input-update ${todo.done ? "text-decoration-dashed" : ""}`}
        name="updateDescription"
        value={updateDescription}
        onChange={onInputChange}
        placeholder=""
        readOnly={disabled}
        ref={focusInputRef}
      />

      <EditButton className="btn-edit" type="submit">
        <FaEdit />
      </EditButton>
    </form>
  );
};

const ItemInput = styled.input`
  width: 350px;
  height: 30px;
  margin: 10px 0;
`;

const EditButton = styled.button`
  cursor: pointer;
  width: 35px;
  height: 35px;
  margin: 0 5px;
  background-color: #a3cc1b;
  border: none;

  &:hover{
    font-size: 15px;
  }
`;
