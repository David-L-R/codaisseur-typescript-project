import { useState } from "react";
import { Item } from "../../types/item"; // we need to import the type
import Tags from "../tags/Tags";
import TodoItem from "../todoItem/TodoItem";

export default function TodoList() {
  const [requiredTags, setRequiredTags] = useState<string[]>([]);
  const [list, setList] = useState<Item[]>([
    {
      id: 0,
      text: "Make this app",
      tags: ["react", "typescript"],
      isDone: false,
    },
    {
      id: 1,
      text: "Fall in love with TypeScript",
      tags: ["romantic", "typescript"],
      isDone: false,
    },
    {
      id: 2,
      text: "Pray to react 3 times",
      tags: ["romantic", "react"],
      isDone: false,
    },
  ]);
  const tags = Array.from(new Set(list.map((item) => item.tags).flat()));

  const toggleDone = (id: number): void => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        } else {
          return item;
        }
      })
    );
  };

  const filterList = (item: Item) => {
    if (requiredTags.length === tags.length) {
      return true;
    }
    for (let tag of requiredTags) {
      if (!item.tags.includes(tag)) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className='todo-list'>
      <Tags
        tags={tags}
        setRequiredTags={setRequiredTags}
        requiredTags={requiredTags}
      />
      {list.filter(filterList).map((item) => (
        <TodoItem item={item} toggleDone={toggleDone} key={item.id} />
      ))}
    </div>
  );
}
