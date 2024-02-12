import React, { useContext, useState } from 'react';
import propTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {
  const { title, thumbnail, price, description } = data;
  const { cartItems, setCartItems } = useContext(AppContext);
  const [expanded, setExpanded] = useState(false);

  const handleAddCart = () => setCartItems([...cartItems, data]);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <section className={`product-card ${expanded ? 'expanded' : ''}`} onClick={handleToggleExpand}>
      <img src={thumbnail} alt="product" className="card__image" />
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
        {expanded && <p className="card__description">{description}</p>}
      </div>
      <button type="button" className="button__add-cart" onClick={handleAddCart}>
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;

export default ProductCard;
