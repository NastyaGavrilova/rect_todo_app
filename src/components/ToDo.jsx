import React, { useState } from 'react';
import { Card, Divider, Button } from 'antd';
import { ToDoItem } from './ToDoItem';
import { ToDoForm } from './ToDoForm';

export const ToDo = () => {
  const [todos, setTodos] = useState([
    {id: 1, title: 'Bugatti Veyron', desc : 'French sport car', checked: false},
    {id: 2, title: 'Koenigsegg Regera', desc : 'Swedish sport car', checked: false},
    {id: 3, title: 'Dodge Viper', desc : 'American sport car',checked:false}
  ]);
  const [idCount, setIdCount] = useState(10);

  const renderTodoItems = (todos) => {
    return (
      <ul className="todo-list">
        { todos.map(todo => <ToDoItem 
            key={todo.id}
            item={todo}
            onRemove={onRemove} 
            onCheck={onCheck} 
          />) }
      </ul>
    )
  }

  const onRemove = (id) => {
    const index = todos.findIndex(todo => todo.id === id);

    if (index !== -1) {
      todos.splice(index, 1);
      setTodos([...todos]);
    }
  }

  const onCheck = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    
    if (index !== -1) {
      const todo = todos[index];
    
      todo.checked = !todo.checked;
      todos.splice(index, 1, todo);
      
      setTodos([...todos]);
    }

    
  }

  const onSubmit = (title, desc) => {
    const todo = {
      title,
      desc,
      id: idCount,
      checked: false
    };

    setTodos([...todos, todo]);
    setIdCount(idCount + 1);
  } 

  const removeChecked = () => { 
    
    let i = todos.length;
    while (i--) {
      if (todos[i].checked === true) {
          todos.splice(i, 1);
      }
    }
    
    setTodos([...todos]);
  }



  const numberOfUnChecked = () => { 

    let count = 0;

    let i = todos.length;
    while (i--) {
      if (todos[i].checked === false) {
          count++;
      }
    }

    return count;
  }


  return (
    <Card title={'List of sports cars'} className="todo-card">
      <ToDoForm onSubmit={onSubmit} />
      <Divider />
      { renderTodoItems(todos) }
      <Divider />
      <p>Number of Unchecked cards: <p className="todo-numberUnchecked">{numberOfUnChecked()}</p></p>
      <Divider />
      <Button danger = "true" htmlType="submit" type="primary" onClick={removeChecked}>Remove checked cards</Button>
    </Card>
  );
}
