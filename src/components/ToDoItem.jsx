import {React } from 'react';
import { Button, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export const ToDoItem = (props) => {
  const { item, onCheck, onRemove } = props;
  const onRemoveItem = (e) => {
    e.preventDefault();

    if (onRemove) {
      onRemove(item.id);
    }
  }

  const onCheckItem = () => {
    if (onCheck) {
      onCheck(item.id);
    }
  }

  return (
    <div>
      <li className="todo-item" key={item.id}>
      <Checkbox 
        checked={item.checked}
        onChange={onCheckItem}
      >{item.title}</Checkbox>      
      <Button danger = "true" type = "primary" onClick={onRemoveItem} icon={<DeleteOutlined />}></Button>
      </li>    
      <p className="todo_item_desc" >Description: {item.desc}</p>
    </div>
  )
}