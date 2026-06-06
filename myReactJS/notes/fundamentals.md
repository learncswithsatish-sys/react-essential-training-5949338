# React Fundamentals

React is a JavaScript library for building user interfaces. It lets you describe UI using components and update the UI efficiently when data changes.

## What is JSX?

JSX looks like HTML inside JavaScript. Under the hood, JSX becomes `React.createElement(...)` calls.

Example:

```jsx
function Greeting() {
  return <h1>Hello from React!</h1>;
}
```

## Components

Components are reusable UI building blocks. They can be:

- Functional components (recommended)
- Class components (older pattern)

A component returns elements and can receive data through `props`.

## Props

Props are the inputs to components.

```jsx
function HotelName({ name }) {
  return <h2>{name}</h2>;
}
```

## Why React?

React helps you build interactive applications by keeping the UI in sync with state. When state changes, React re-renders the component tree efficiently.
