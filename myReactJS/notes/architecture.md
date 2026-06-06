# React Architecture

A well-structured React app is easy to understand and maintain.

## Folder organization

A common approach is feature-based folders:

- `src/components/` for reusable UI pieces
- `src/data/` for static or mock data
- `src/pages/` for route-level page components
- `src/hooks/` for custom hooks

## Separation of concerns

- UI components render markup and style.
- Container components handle data and state.
- Utility modules handle transformations and business logic.

## Component design patterns

- Presentational components display data.
- Stateful containers manage state and pass props.
- Custom hooks encapsulate shared logic.

## Scalability tips

- Keep component APIs small and predictable.
- Avoid deep prop chains by using composition or context.
- Document component props and responsibilities.
