import React from 'react';
import Button from './Button';

function PizzaBlock({ id, name, imageUrl, price, types, onAddPizza }) {
  const avalibleTypes = ['тонкое', 'традиционное'];
  const size = ['26', '30', '40'];
  const [activeTipe, setActiveTipe] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState();

  const choseSort = (item) => {
    setActiveTipe(item);
  };
  const choseSize = (item) => {
    setActiveSize(item);
  };
  const handlAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      type: avalibleTypes[activeTipe],
    };
    onAddPizza(obj);
  };
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {avalibleTypes.map((ty, index) => (
            <li
              key={ty}
              onClick={() => choseSort(index)}
              className={activeTipe === index ? 'active' : ''}>
              {ty}
            </li>
          ))}
        </ul>
        <ul>
          {size.map((size, index) => (
            <li
              key={size + '2'}
              onClick={() => choseSize(index)}
              className={activeSize === index ? 'active' : ''}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} $</div>
        <Button onClick={handlAddPizza} className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>1</i>
        </Button>
      </div>
    </div>
  );
}

export default PizzaBlock;
