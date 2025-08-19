import React from "react";
import { Card } from "./Card";

export const Desserts = ({ desserts }) => {
  return (
    <div className="desserts__container">
      <h1 className="title">Desserts</h1>
      <div className="desserts">
        {desserts.map((dessert) => (
          <Card key={dessert.id} dessert={dessert} />
        ))}
      </div>
    </div>
  );
};
