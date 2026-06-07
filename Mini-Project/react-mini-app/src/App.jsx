import { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Minimal Backpack", price: 79 },
  { id: 2, name: "Wireless Headphones", price: 129 },
  { id: 3, name: "Travel Mug", price: 24 },
];

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((current) => [...current, product]);
  }

  return (
    <div className="app-container">
      <header>
        <h1>React Mini Project</h1>
        <p>Simple product list with add-to-cart interaction.</p>
      </header>

      <section className="products">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </article>
        ))}
      </section>

      <aside className="cart">
        <h2>Cart ({cart.length})</h2>
        <ul>
          {cart.length === 0 ? (
            <li>No items added yet.</li>
          ) : (
            cart.map((item, index) => (
              <li key={`${item.id}-${index}`}>{item.name}</li>
            ))
          )}
        </ul>
      </aside>
    </div>
  );
}
