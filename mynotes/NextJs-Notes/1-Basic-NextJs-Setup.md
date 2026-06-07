# Basic Next.js Setup

## Quick Start

```bash
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
```

## App Structure

| Folder        | Purpose                             |
| ------------- | ----------------------------------- |
| `pages/`      | Route-based page components         |
| `public/`     | Static files (images, fonts, icons) |
| `styles/`     | Global and shared CSS               |
| `components/` | Reusable UI components              |
| `pages/api/`  | API route handlers                  |

## Core Scripts

| Command         | Purpose                  |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Create production build  |
| `npm run start` | Run production server    |

## Example Page

```jsx
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>This is a simple page component.</p>
    </div>
  );
}
```

## Add a Route

1. Create `pages/about.js`
2. Add:

```jsx
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```

3. Visit `http://localhost:3000/about`

## Notes

- Files in `pages/` automatically become routes.
- `npm run dev` is for local development.
- `npm run build` must complete before `npm run start`.

## NextJS Route, Link

-
