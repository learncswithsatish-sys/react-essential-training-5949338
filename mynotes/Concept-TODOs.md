# Concepts

1. State Management

- useState in siblings ( at same level), lifting state up to a common ancestor, and passing it down via props.
- context API - for global state management,small to medium apps.
- Redux - for large applications with complex state management needs.
- MobX - for simpler, more intuitive state management with observable data and actions.

2. Component Composition - building complex UIs from smaller components.

3. Hooks - useState, useEffect, custom hooks for sharing logic.

- useEffect - for side effects and data fetching.
- useReducer - for complex state logic.
- useContext - for consuming context values.
- Custom hooks - for sharing reusable logic across components.
- useMemo and useCallback - for performance optimization.
- useRef - for accessing DOM elements and mutable values.
- useLayoutEffect - for synchronously running effects after DOM mutations.
- useImperativeHandle - for customizing instance values exposed to parent components when using refs.
- useDebugValue - for displaying custom hook debug information in React DevTools.
- useTransition and useDeferredValue - for managing concurrent UI updates and improving performance.
- useId - for generating unique IDs that are stable across server and client rendering.
- useSyncExternalStore - for subscribing to external data sources in a way that works with concurrent rendering.
- useInsertionEffect - for injecting styles before DOM mutations.
- useEvent - for handling events in a way that works with concurrent rendering.
- useCache - for caching values that are expensive to compute.
- useServerInsertedHTML - for inserting HTML into the server-rendered output.
- useServerInsertedCSS - for inserting CSS into the server-rendered output.
- useServerInsertedScripts - for inserting scripts into the server-rendered output.
- useServerInsertedMeta - for inserting meta tags into the server-rendered output.
- useServerInsertedLink - for inserting link tags into the server-rendered output.
- useServerInsertedStyle - for inserting style tags into the server-rendered output.
- useServerInsertedTitle - for inserting title tags into the server-rendered output.
- useServerInsertedBase - for inserting base tags into the server-rendered output.
- useServerInsertedNoscript - for inserting noscript tags into the server-rendered output.
- useServerInsertedTemplate - for inserting template tags into the server-rendered output.
- useServerInsertedPortal - for inserting portal elements into the server-rendered output.
- useServerInsertedFragment - for inserting fragments into the server-rendered output.
- useServerInsertedSuspense - for inserting suspense boundaries into the server-rendered output.
- useServerInsertedErrorBoundary - for inserting error boundaries into the server-rendered output.
