import React from "react";
import { addToCart } from "../../redux/actions/cartActions";

import AddIcon from "mdi-react/AddIcon";

const Item = ({ item, dispatch }) => {
  const handleAddToCart = () => dispatch(addToCart(item.id));

  return (
    <div className="card" key={item.id}>
      <div className="card-image">
        <img src={item.img} alt={item.title} />
        <span className="card-title">{item.title}</span>
        <span
          to="/"
          className="btn-floating floating halfway-fab waves-effect waves-light red"
          onClick={handleAddToCart}
        >
          <AddIcon />
        </span>
      </div>

      <div className="card-content">
        <p>{item.desc}</p>
        <p>
          <b>Price: {item.price}$</b>
        </p>
      </div>
    </div>
  );
};

export default Item;
