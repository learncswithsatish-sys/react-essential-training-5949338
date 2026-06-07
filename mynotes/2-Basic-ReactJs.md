# React Elements and JSX

> See [App.jsx](../Course-HandsOn/react-project/src/App.jsx) and [main.jsx](../Course-HandsOn/react-project/src/main.jsx).

React uses **elements** to describe the UI. JSX is a shorthand syntax for creating those element objects.

| Concept        | What it means                                                       |
| -------------- | ------------------------------------------------------------------- |
| JSX            | `<h1>Hello</h1>` becomes `React.createElement('h1', null, 'Hello')` |
| Immutable      | Elements do not change after creation                               |
| Reconciliation | React updates only changed DOM nodes                                |
| Nesting        | Combine elements/components for complex UI                          |

## Element Creation

| Style | Example                                                                                       | Why use it                          |
| ----- | --------------------------------------------------------------------------------------------- | ----------------------------------- |
| JSX   | `<div className="card"><h2>Hotel</h2></div>`                                                  | Cleaner and easier to read          |
| API   | `React.createElement('div', { className: 'card' }, React.createElement('h2', null, 'Hotel'))` | Useful without JSX or in toolchains |

## Rendering

| API                 | Syntax                           | When to use             |
| ------------------- | -------------------------------- | ----------------------- |
| `createRoot()`      | `createRoot(el).render(<App />)` | React 18+ (recommended) |
| `ReactDOM.render()` | `ReactDOM.render(<App />, el)`   | Older React versions    |

## Component Basics

Components are reusable UI units. Functional components are the modern standard.

```jsx
function HotelCard({ name, description }) {
  return (
    <div className="hotel-card">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
```

Use it like this:

```jsx
<HotelCard name="Hotel California" description="A lovely place." />
```

## Props

Props are read-only inputs passed to components.

| Feature        | Notes                                          |
| -------------- | ---------------------------------------------- |
| Types          | Strings, numbers, objects, functions           |
| Default values | Use `defaultProps` or function defaults        |
| Destructuring  | `function HotelCard({ name, description }) {}` |
| Validation     | Use PropTypes or TypeScript for safety         |

## Fetching Data

- Fetch data inside client components using `useEffect`.
- Keep loading and error state local to the component.
- Use custom hooks when the same fetch logic is reused.

| Pattern               | When to use                         | Example                                                                    |
| --------------------- | ----------------------------------- | -------------------------------------------------------------------------- |
| `useEffect` + `fetch` | Load data after component mounts    | `useEffect(() => { fetch(url).then(r=>r.json()).then(setData); }, [url]);` |
| Axios                 | When you need extra request control | `axios.get(url).then(res => setData(res.data))`                            |
| Custom hook           | Reuse fetch logic across components | `const data = useData(url)`                                                |

Example:

```jsx
import { useState, useEffect } from "react";

function DataList({ url }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

## Main Entry Point

```jsx
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);
```

## Best Practices

- Prefer JSX for readability.
- Keep components small and focused.
- Use descriptive names for components and props.
- Avoid deep prop nesting; lift state up or use context when needed.
