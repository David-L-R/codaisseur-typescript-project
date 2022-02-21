import { Children } from "react";

interface ICard {
  title: string;
  content: string;
  img: string;
}

const Card = (title, img, content) => {
  return (
    <div>
      <img src={img} />
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
};
