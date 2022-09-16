import React from 'react';
import { Iproducts } from 'types/types';
import c from './Card.module.css';

interface Props {
  products: Iproducts[];
}

const Card = (props: Props): React.ReactElement => {
  return (
    <React.Fragment>
      {props.products.map((el: Iproducts) => {
        return (
          <div key={el.id} className={c.card}>
            <div className={c.name}>{el.name}</div>
            <img className={c.card__img} src={el.img} alt="img" />
            <div>Количество: {el.quantity}</div>
            <div>{el.manufacturer}</div>
            <div>Обжарка: {el.roasting}</div>
            <div>Помол: {el.grinding}</div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Card;
