# React Server Component

## Overview

- React Server Components (RSC) render on the server by default.
- They can fetch data and generate UI without sending code for that component to the browser.
- Next.js uses RSC in the `app/` directory with server-rendered layouts and pages.

## Key benefits

- Faster initial load: less JavaScript shipped to the client.
- Better SEO and performance from server-side rendering.
- Simpler data fetching using `fetch()` directly in server components.

## How to identify

| Marker          | Meaning          |
| --------------- | ---------------- |
| No `use client` | Server Component |
| `use client`    | Client Component |

## Rules

- Server components cannot use browser-only APIs like `window`, `document`, or `localStorage`.
- They cannot use React hooks that require client rendering (`useState`, `useEffect`).
- They can import client components and pass props to them.

## Example

```jsx
// app/page.js
export default async function Page() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return (
    <main>
      <h1>Server Component Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
```

## When to use

- Static or dynamic pages that load data from a server.
- Layouts and page shells that don't need client interactivity.
- Reducing client bundle size by keeping logic on the server.

## Client interaction

- Use client components for interactive UI parts like forms, buttons, and event handlers.
- Import client components into server components when needed.

```jsx
// app/page.js
import CartButton from "./CartButton";

export default function Page() {
  return (
    <main>
      <h1>Shop</h1>
      <CartButton />
    </main>
  );
}
```

````jsx
// app/CartButton.js
"use client";

import { useState } from "react";

export default function CartButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Add {count}</button>;
}

## Passing Data as Props

- Server components send data to client components through props.
- Props must be serializable (strings, objects, arrays, numbers, booleans).
- Use props to keep the server-client boundary clear.

```jsx
// app/page.js
import CartButton from "./CartButton";

export default function Page() {
  const product = { id: 1, name: "Shoes", price: 89 };
  return <CartButton product={product} />;
}
````

```jsx
// app/CartButton.js
"use client";

export default function CartButton({ product }) {
  return <button>Add {product.name}</button>;
}
```

## Creating a Client Component

- Add `"use client"` at the top of the file.
- Use client-only hooks like `useState`, `useEffect`, and event handlers.
- Keep the component small and focused on interactivity.

## Building a Form

- Build forms inside client components when input handling or submission is interactive.
- Manage form state with `useState` or custom hooks.
- Validate input locally before sending it to the server.

```jsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form>
      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Creating a Server Action

- Server Actions let client components call server-side functions directly.
- Define the action in a server component or module and pass it as a prop.
- Use them for form submission, data mutations, and secure side effects.

```jsx
// app/actions.js
export async function submitContact(data) {
  // server-side logic, e.g. save to database
  return { success: true };
}
```

```jsx
// app/ContactForm.js
"use client";

import { useState } from "react";
import { submitContact } from "./actions";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form action={submitContact}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />
      <button type="submit">Send</button>
    </form>
  );
}
```

```

```
