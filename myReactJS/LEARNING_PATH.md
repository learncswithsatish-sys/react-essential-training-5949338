# React Learning Path: Beginner to Architect

This learning path is designed for developers with strong backend experience who want to gain practical React skills and build architecture confidence.

## Stage 1: React Fundamentals

- Understand the role of React in the browser.
- Learn the difference between HTML, JSX, and React components.
- Build simple functional components with props.
- Manage local state using `useState`.

## Stage 2: Component Architecture

- Compose components into a page structure.
- Use reusable child components and data props.
- Keep components small and focused.
- Organize files by feature rather than by type.

## Stage 3: React Hooks

- Learn `useEffect` for side effects and lifecycle-like behavior.
- Use `useMemo` to avoid recomputing derived values.
- Understand `useCallback` when passing functions to deeply nested children.
- Explore built-in hooks like `useContext` for shared data.

## Stage 4: State Management Patterns

- Keep owner state closest to the component that needs it.
- Pass state and setter functions via props when appropriate.
- Lift state up to share changes across siblings.
- Consider contexts, reducers, and external stores for larger apps.

## Stage 5: Architecting React Apps

- Choose a routing strategy for multi-page apps.
- Build feature-based folders for components, data, and utilities.
- Separate UI components from stateful container components.
- Define clear domain models and data flow.

## Stage 6: Testing and Deployment

- Write component tests for display and user interaction.
- Use end-to-end tests for full flows.
- Learn build commands and static deployment.
- Choose hosting platforms like Vercel, Netlify, or GitHub Pages.

## How to Use This Workspace

1. Start the app with `npm run dev`.
2. Read the notes in the `notes/` folder.
3. Open the `src/` components and `src/App.jsx` code.
4. Experiment by extending the hotel listing mini-project.
