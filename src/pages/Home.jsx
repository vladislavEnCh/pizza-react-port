import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SortPopup from '../components/SortPopup';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import { setCategory } from '../redux/actions/filters';
import { addPizzaToCart } from '../redux/actions/cart';

function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const dispatch = useDispatch();
  const addPizzaToCartNoRedux = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(index) => dispatch(setCategory(index))}
          items={['Мясные', 'Вегетарианская', 'Гриль', ' Острые', ' Закрытые']}
        />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock
            onAddPizza={(obj) => addPizzaToCartNoRedux(obj)}
            key={obj.id}
            {...obj}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
