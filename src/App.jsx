import styled from "styled-components";
import { TodoAdd } from "./components/TodoAdd";
import { TodoList } from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";

const App = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompletedTodo,
    handleUpdateTodo,
  } = useTodo();
  return (
    <>
      <ContainerDiv>
        <h1>To-do add ...</h1>
        <TitleDiv>
          <TitleH3>
            Todos: <span>{todosCount}</span>
          </TitleH3>
          <TitleH3>
            Otmetki: <span>{pendingTodosCount}</span>
          </TitleH3>
        </TitleDiv>

        <div>
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>

        <TodoList
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompletedTodo}
        />
      </ContainerDiv>
    </>
  );
};

export default App;

const ContainerDiv=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid red;
  width: 500px;
  margin: auto;
  background-color: green;
`

const TitleDiv=styled.div`
  display: flex;
`

const TitleH3 = styled.h3`
  color: white;
`
