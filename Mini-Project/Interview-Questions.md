# React and Next.js Interview Questions

## React Interview Questions

### 1. What is React?

- React is a JavaScript library for building user interfaces using reusable components.
- It uses a virtual DOM to update the UI efficiently.

### 2. What is JSX?

- JSX is a syntax extension that looks like HTML inside JavaScript.
- Example: `<div>Hello</div>` compiles to `React.createElement('div', null, 'Hello')`.

### 3. What is the difference between props and state?

- Props are read-only inputs passed from parent to child.
- State is local component data managed with `useState`.

### 4. How do you fetch data in React?

- Use `useEffect` to fetch data after the component mounts.
- Keep loading, success, and error state in the component.

Example:

```jsx
import { useState, useEffect } from "react";

function DataLoader() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

### 5. What is a client component?

- A client component runs in the browser.
- It can use browser APIs, `useState`, `useEffect`, and event handlers.

### 6. Example of a functional component

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

## Next.js Interview Questions

### 1. What is Next.js?

- Next.js is a React framework for server-side rendering, static generation, and full-stack apps.
- It provides routing, API routes, and optimized page rendering.

### 2. What is the App Router?

- The App Router (`app/`) uses server components by default.
- It supports nested layouts, templates, and server actions.

### 3. How do you create a client component in Next.js?

- Add `"use client"` at the top of the file.
- Import hooks like `useState` or `useEffect` only inside client components.

Example:

```jsx
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>;
}
```

### 4. What is a server component in Next.js?

- Server components render on the server and send HTML to the browser.
- They cannot use client-only hooks or browser APIs directly.

### 5. What is a Server Action?

- Server actions are functions that can be called from client components.
- They run on the server and can handle form submissions securely.

### 6. Example of a simple Next.js page

```jsx
export default function HomePage() {
  return (
    <main>
      <h1>Next.js Mini Project</h1>
      <p>This page is server-rendered on the first request.</p>
    </main>
  );
}
```

## Project examples

- **React Mini App**: interactive product list with add-to-cart state.
- **Next.js Mini App**: server-rendered product list plus client counter.

## Useful follow-up questions

- How does React's reconciliation algorithm work?
- What is the difference between static generation and server-side rendering?
- How do you optimize a React app for performance?
- How do you share state between components?
- When should you use client components in Next.js?
