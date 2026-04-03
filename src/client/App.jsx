import React, { useMemo, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import StoreFront from './containers/StoreFront.jsx';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <aside
      style={{
        width: '360px',
        minWidth: '360px',
        padding: '16px',
        background: '#f3f3f3',
        borderLeft: '1px solid #ddd',
        minHeight: 'calc(100vh - 108px)',
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          background: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '16px',
          position: 'sticky',
          top: '16px'
        }}
      >
        <h2 style={{ marginTop: 0, fontSize: '22px' }}>Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p style={{ color: '#565959' }}>Your cart is empty.</p>
        ) : (
          <>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  style={{
                    padding: '12px 0',
                    borderBottom: '1px solid #e7e7e7'
                  }}
                >
                  <div style={{ fontWeight: 500 }}>{item.name}</div>
                  <div style={{ color: '#565959', fontSize: '14px', marginTop: '4px' }}>
                    Qty: {item.quantity}
                  </div>
                  <div style={{ marginTop: '6px', fontWeight: 700 }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      marginTop: '8px',
                      background: '#ffd814',
                      border: '1px solid #fcd200',
                      borderRadius: '20px',
                      padding: '8px 12px',
                      cursor: 'pointer'
                    }}
                  >
                    Remove one
                  </button>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '16px', fontSize: '20px', fontWeight: 700 }}>
              Subtotal: ${total.toFixed(2)}
            </div>

            <button
              type="button"
              onClick={clearCart}
              style={{
                marginTop: '12px',
                width: '100%',
                background: '#ffd814',
                border: '1px solid #fcd200',
                borderRadius: '20px',
                padding: '10px 16px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Clear cart
            </button>
          </>
        )}
      </div>
    </aside>
  );
};

const Home = ({ cartCount }) => {
  return (
    <main style={{ padding: '32px' }}>
      <h1 style={{ marginTop: 0 }}>Welcome to Trackr Shop</h1>
      <p style={{ color: '#565959' }}>Browse products and add them to your cart.</p>
      <p style={{ fontWeight: 600 }}>Items in cart: {cartCount}</p>
      <Link
        to="/store"
        style={{
          display: 'inline-block',
          marginTop: '8px',
          background: '#ffd814',
          color: '#111',
          textDecoration: 'none',
          border: '1px solid #fcd200',
          borderRadius: '20px',
          padding: '10px 18px'
        }}
      >
        Go to Store
      </Link>
    </main>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <header>
        <div
          style={{
            background: '#131921',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px',
            gap: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <Link
              to="/"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '28px',
                fontWeight: 700,
                letterSpacing: '0.5px'
              }}
            >
              trackr
            </Link>

            <div style={{ color: '#ccc', fontSize: '14px' }}>
              Deliver to
              <div style={{ color: '#fff', fontWeight: 700 }}>New York</div>
            </div>
          </div>

          <div style={{ flex: 1, maxWidth: '700px' }}>
            <div
              style={{
                display: 'flex',
                overflow: 'hidden',
                borderRadius: '8px',
                border: '2px solid #febd69',
                background: '#fff'
              }}
            >
              <input
                type="text"
                placeholder="Search Trackr Shop"
                style={{
                  flex: 1,
                  border: 'none',
                  padding: '12px',
                  fontSize: '15px',
                  outline: 'none'
                }}
              />
              <button
                type="button"
                style={{
                  border: 'none',
                  background: '#febd69',
                  padding: '0 18px',
                  cursor: 'pointer',
                  fontWeight: 700
                }}
              >
                Search
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
              Home
            </Link>
            <Link to="/store" style={{ color: '#fff', textDecoration: 'none' }}>
              Store
            </Link>
            <div style={{ fontWeight: 700 }}>Cart: {cartCount}</div>
          </div>
        </div>

        <div
          style={{
            background: '#232f3e',
            color: '#fff',
            padding: '10px 20px',
            display: 'flex',
            gap: '18px',
            fontSize: '14px'
          }}
        >
          <span>Today's Deals</span>
          <span>Customer Service</span>
          <span>Registry</span>
          <span>Gift Cards</span>
          <span>Sell</span>
        </div>
      </header>

      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home cartCount={cartCount} />} />
            <Route path="/store" element={<StoreFront addToCart={addToCart} />} />
          </Routes>
        </div>

        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      </div>
    </div>
  );
};

export default App;