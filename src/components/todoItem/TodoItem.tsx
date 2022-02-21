import React from "react";
import { Item } from "../../types/item";
import Checkbox from "../checkbox/Checkbox";

type Props = {
  // we should receive a todo item object
  item: Item;

  // and a function that we don't have to give
  //  anything, and doesn't return anything either
  //  (it "just does" something)
  toggleDone: (id: number) => void;

  // ..and maybe we'll add some more stuff later,
  //  this will be enough for now
};

export default function TodoItem(props: Props) {
  const { item, toggleDone } = props;
  const { tags, text, id, isDone } = item;

  const getLineStyle = () => {
    return isDone ? "line-through" : "none";
  };

  return (
    <div
      onClick={() => toggleDone(id)}
      style={{ textDecoration: getLineStyle() }}
    >
      <Checkbox checked={isDone} /> {text}
    </div>
  );
}
