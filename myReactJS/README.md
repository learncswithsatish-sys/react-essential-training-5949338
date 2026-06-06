# myReactJS Learning Workspace

A beginner-to-architect React learning path built as a standalone Vite app. This project includes:

- A hotel listing mini-project with filtering and booking state.
- Learning notes from fundamentals through architecture.
- Example components and reusable patterns.

## Getting Started

1. Open a terminal in `/workspaces/react-essential-training-5949338/myReactJS`
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local app in your browser. Vite will show the URL, typically `http://localhost:5173`.

## Learning Path

- `LEARNING_PATH.md` — roadmap for beginner to architect concepts.
- `notes/` — progressive study notes covering fundamentals, JSX, hooks, state, architecture, and deployment.
- `src/components/` — reusable component patterns.
- `src/examples/` — small code examples for React state and context.

## Mini-Project

The hotel listing mini-project demonstrates:

- `useState` for selected filters and booking state
- `useMemo` and `useEffect` for derived values and status updates
- component composition with `HotelFilters`, `HotelList`, and `BookingSummary`

## Next Steps

- Read `LEARNING_PATH.md`.
- Open `src/App.jsx` and explore how state flows between components.
- Try adding a search field or a checkout summary to the mini-project.
