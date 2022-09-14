import React from 'react';
interface TodoListProps{
    todoItems: { id: string; text: string }[]
    onDeleteTodo: (id:string)=>void,
}
const TodoList: React.FC<TodoListProps> = props => {
    return <ul>
        {props.todoItems.map(todo =>
            <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={props.onDeleteTodo.bind(null,todo.id)}>削除</button>
            </li>)
        }
    </ul>
}

export default TodoList