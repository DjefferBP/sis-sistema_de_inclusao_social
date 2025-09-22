import { useState } from "react";
import { InputAdd } from "./components/InputAdd";
import { Todo } from "./components/Todo";
import { TodoAPI } from "./shared/services/api/TodoApi";

export function App() {
  const [list, setList] = useState([
    { id: 1, label: 'Item 1', complete: false },
    { id: 2, label: 'Item 2', complete: false },
    { id: 3, label: 'Item 3', complete: false },
    { id: 4, label: 'Item 4', complete: false },
  ]);

  const handleAdd = (value: string) => {
    setList([
      ...list,
      { id: list.length + 1, complete: false, label: value }
    ])
  }

  const handleComplete = (id: number) => {
    setList(list.map(item => item.id === id ? { ...item, complete: true } : item))
  }

  const handleRemove = (id: number) => {
    setList(list.filter(item => item.id !== id))
  }

  return (
    <div>
      <InputAdd
        onAdd={handleAdd}
      />



      <ol>
        {list.map(listItem => (
          <Todo
            key={listItem.id}
            id={listItem.id}
            label={listItem.label}
            complete={listItem.complete}
            onComplete={() => handleComplete(listItem.id)}
            onRemove={() => handleRemove(listItem.id)}
          />
        ))}
      </ol>
    </div>
  );
}

/*
<li key={listItem.id}>
            {listItem.label}

            <Button variant="contained" onClick={() => {
              setList([
              ...list.map(item => ({
                 ...item, complete: item.id === id ? true : item.complete}))
              ])
            }}
            >
              Concluir
            </Button>
            <Button variant="outlined" color="error" onClick={() => setList([...list.filter(item => item.id !== listItem.id)])}>
              Remover
            </Button>
          </li>

*/