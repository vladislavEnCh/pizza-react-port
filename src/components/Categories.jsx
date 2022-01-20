import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryBy } from '../redux/actions/filters';

function Categories({ items, onClick }) {
  const [itemChose, setItemChose] = React.useState(null);
  const dispatch = useDispatch();
  const onSelectItem = (index) => {
    setItemChose(index);
    onClick(index);
    // console.log(dispatch(setCategoryBy(name)));
    dispatch(setCategoryBy(index));
  };
  return (
    <div className="categories">
      <ul>
        <li
          className={itemChose === null ? 'active' : ''}
          onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items.map((name, index) => (
          <li
            className={itemChose === index ? 'active' : ''}
            onClick={() => onSelectItem(index, name)}
            key={`${name}__${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
