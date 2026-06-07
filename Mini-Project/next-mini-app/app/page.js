import CounterButton from "./CounterButton";

const products = [
  { id: 1, name: "Smart Lamp", price: 39 },
  { id: 2, name: "Notebook", price: 12 },
  { id: 3, name: "Coffee Mug", price: 18 },
];

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Next.js Mini Project</h1>
        <p>Server-rendered product list with a client-side counter.</p>
      </section>

      <section className="product-grid">
        {products.map((product) => (
          <article key={product.id} className="card">
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </article>
        ))}
      </section>

      <section className="interaction">
        <CounterButton />
      </section>
    </main>
  );
}
