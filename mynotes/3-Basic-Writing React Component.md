# Writing React Components — Concise Notes

## Key Ideas

| Idea             | Notes                                |
| ---------------- | ------------------------------------ |
| Components       | Building blocks of React UI          |
| Functional first | Use functions + hooks for new code   |
| Small + reusable | Extract repeated or complex UI       |
| Composition      | Compose via child components         |
| Lifting state    | Keep shared state in common ancestor |

## Component Types

| Type       | Syntax                          | Use case                        | Notes                    |
| ---------- | ------------------------------- | ------------------------------- | ------------------------ |
| Functional | `function` / arrow              | Default for new code            | Hooks available          |
| Class      | `class extends React.Component` | Legacy or lifecycle migration   | Still valid, less common |
| Fragment   | `<>...</>` / `React.Fragment`   | Return siblings without wrapper | avoids extra DOM nodes   |

## Props vs State

| Concept    | Props                     | State                                   |
| ---------- | ------------------------- | --------------------------------------- |
| Source     | Passed from parent        | Owned by component                      |
| Mutability | Read-only                 | Mutable via `setState` / `useState`     |
| Purpose    | Configure/communicate     | Track local UI data                     |
| Example    | `<Greeting name="Sam" />` | `const [count, setCount] = useState(0)` |

## Hooks at a glance

| Hook        | Purpose               | When to use                         |
| ----------- | --------------------- | ----------------------------------- |
| `useState`  | Local component state | Form values, toggles, counters      |
| `useEffect` | Side effects          | Data fetch, subscriptions, DOM sync |
| Custom hook | Shared logic          | Reuse behavior across components    |

## Minimal examples

### Comment + UserInfo

```jsx
import React, { useState } from "react";

function Comment({ author, text, date }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="Comment">
      <UserInfo user={author} />
      <p>{text}</p>
      <p>{date.toLocaleDateString()}</p>
      <button onClick={() => setIsLiked(!isLiked)}>
        {isLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

function UserInfo({ user }) {
  return (
    <div className="UserInfo">
      <img src={user.avatarUrl} alt={user.name} />
      <span>{user.name}</span>
    </div>
  );
}
```

### Counter

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## Best practices

- Keep components focused and small.
- Prefer composition over duplication.
- Use hooks for state and side effects.
- Make props clear and minimal.
- Extract repeated UI into child components.

## Cheat sheet

| Concept              | Syntax                                |
| -------------------- | ------------------------------------- |
| Functional component | `const MyComp = ({}) => <div />`      |
| Local state          | `const [s, setS] = useState(initial)` |
| Pass props           | `<Child prop={value} />`              |
| Multiple children    | `<>...</>`                            |
