import { useEffect, useState } from "react";

import { TodoAPI, type ITodo } from "../shared/services/api/TodoApi";
import { InputAdd } from "../components/Input/InputAdd";
import { Todo } from "../components/Todo/Todo";
import { PageLayout } from "../shared/layout/page-layout/PageLayout"



export const Home = () => {
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    async function fetchData() {
      const todos = await TodoAPI.getAll();
      setList(todos);
    }

    fetchData();
  }, []);

  async function handleAdd(value: string) {
    const newTodo = await TodoAPI.create({ label: value, complete: false })

    setList([...list, newTodo])
  }

  async function handleComplete(id: number) {
    await TodoAPI.updateById(id, { complete: true })
    setList(list.map(item => item.id === id ? { ...item, complete: true } : item));
  }

  async function handleRemove(id: number) {
    TodoAPI.deleteById(id)
    setList(list.filter(item => item.id !== id));
  }

  return (
    <PageLayout title="Página inicial">
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
    </PageLayout>
  );
}