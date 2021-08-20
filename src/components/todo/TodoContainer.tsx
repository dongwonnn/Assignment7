import { useTodo } from './TodoService';
import TodoTemplate from './template/TodoTemplate';
import TodoHead from './template/head/TodoHead';
import TodoList from './template/list/TodoList';
import TodoCreate from './template/create/TodoCreate';
import TodoFooter from './template/footer/TodoFooter';

const TodoContainer = () => {
  const { todoState, nextIdState, incrementNextId, toggleTodo, removeTodo, createTodo } = useTodo();

  return (
    <>
      <TodoTemplate>
        <TodoHead />
        <TodoCreate nextId={nextIdState} createTodo={createTodo} incrementNextId={incrementNextId} />
        {/* toggleTodo 완료, removeTodo 휴지통, todos: 리스트 겠지? */}
        <TodoList toggleTodo={toggleTodo} removeTodo={removeTodo} todos={todoState} />
        <TodoFooter todos={todoState} />
      </TodoTemplate>
    </>
  );
};

export default TodoContainer;
