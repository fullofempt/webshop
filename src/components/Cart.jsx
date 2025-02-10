import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.title} width={50} />
              <div>
                <h3>{item.title}</h3>
                <p>Цена: {item.price}$</p>
                <button onClick={() => removeFromCart(item.id)}>Удалить</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;