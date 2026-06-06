# Writing React Components — Concise Notes

## Key Ideas

- Components are the building blocks of React UIs.
- Prefer functional components with hooks for new code; class components are legacy but still valid.
- Break UI into small, reusable components and compose them.

## Component Types (quick)

| Type       | Syntax                          | When to use                                              | Example                                                                                           |
| ---------- | ------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Functional | `function/arrow` (hooks)        | Default for most components; simpler and hooks-ready     | `const Greeting = ({name}) => <h1>Hello, {name}</h1>`                                             |
| Class      | `class extends React.Component` | Older codebases or when migrating legacy lifecycle logic | `class Greeting extends React.Component { render(){ return <h1>Hello, {this.props.name}</h1> } }` |
| Fragment   | `<>...</>` or `React.Fragment`  | Return multiple children without extra DOM nodes         | `<> <h1>Hi</h1> <p>Note</p> </>`                                                                  |

## Props vs State (short)

| Concept    | Props                      | State                                       |
| ---------- | -------------------------- | ------------------------------------------- |
| Source     | Passed from parent         | Owned by component                          |
| Mutability | Read-only in child         | Mutable via `setState` / `useState`         |
| Purpose    | Configure/communicate data | Track local UI state (form values, toggles) |
| Example    | `<Greeting name="Sam" />`  | `const [count, setCount] = useState(0)`     |

## Composition & Extraction

- Compose components by including child components (e.g., `<Header/>`, `<List/>`).
- Extract when parts of UI repeat or become complex; keep each component focused.

## Lifting State

- Move shared state up to the nearest common ancestor and pass via props.

## Hooks (minimal)

- `useState` for local state; `useEffect` for side effects; custom hooks to share logic.

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

## Best Practices (bulleted)

- Keep components small and single-purpose.
- Prefer composition over duplication.
- Use hooks for state and side effects; extract custom hooks for reusable logic.
- Keep prop contracts minimal and clear.

## Cheat-sheet (one-liners)

- Functional component: `const MyComp = ({}) => <div/>`.
- Local state: `const [s, setS] = useState(initial)`.
- Pass data: `<Child prop={value} />`.
- Return multiple elements: `<>...</>`.

---

Updated concise summary with tables and a minimal example.
