# Component Interaction in React

- Components can interact by passing data through props and managing shared state.
- Parent components can pass data and functions to children via props.
- Children can call functions passed from parents to communicate back up (lifting state).
- Siblings can share state by lifting it to a common parent and passing it down as props.
- Hooks like `useState` and `useEffect` help manage state and side effects in functional components, enabling more complex interactions.
  Example:

```jsx
import React, { useState } from "react";
function Comment({ author, text, date }) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="Comment">
      <UserInfo user={author} />
      <div className="Comment-text">{text}</div>
      <div className="Comment-date">{date.toLocaleDateString()}</div>
      <button onClick={() => setIsLiked(!isLiked)}>
        {isLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}
function UserInfo({ user }) {
  return (
    <div className="UserInfo">
      <img className="Avatar" src={user.avatarUrl} alt={user.name} />
      <div className="UserInfo-name">{user.name}</div>
    </div>
  );
}
```

## Subling Interaction

- Siblings can share state by lifting it to a common parent and passing it down as props.
- Example: A parent component holds the state for a shared counter, and two sibling components can both read and update that counter through props and callbacks.

```jsx
function Parent() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <SiblingA counter={counter} increment={() => setCounter(counter + 1)} />
      <SiblingB counter={counter} />
    </div>
  );
}
function SiblingA({ counter, increment }) {
  return (
    <div>
      <p>Sibling A Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
function SiblingB({ counter }) {
  return <p>Sibling B Counter: {counter}</p>;
}
```

## Fragments

- Use `<>...</>` or `<React.Fragment>...</React.Fragment>` to return multiple elements without adding extra nodes to the DOM.
- Example:

```jsxfunction FragmentExample() {
  return (
    <>
      <h1>Hi</h1>
      <p>Note</p>
    </>
  );
}
```

| Concept       | Syntax                                                | Purpose                                                 | Example                                                                                      |
| ------------- | ----------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Props         | `<Component propName={value} />`                      | Pass data and functions from parent to child components | `<Greeting name="Sam" />`                                                                    |
| State         | `useState(initialValue)`                              | Manage local component state and trigger re-renders     | `const [count, setCount] = useState(0)`                                                      |
| Lifting State | Move state up to a common ancestor and pass via props | Share state between sibling components                  | Parent holds state and passes it to siblings via props and callbacks                         |
| Hooks         | `useState`, `useEffect`, custom hooks                 | Manage state and side effects in functional components  | `const [isLiked, setIsLiked] = useState(false);` in a Comment component to track like status |
