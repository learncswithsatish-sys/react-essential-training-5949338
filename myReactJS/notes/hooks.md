# React Hooks

Hooks are special functions that let you use React features inside functional components.

## `useState`

`useState` stores local component state.

```jsx
const [count, setCount] = useState(0);
```

## `useEffect`

`useEffect` runs side effects and keeps state in sync with external events.

```jsx
useEffect(() => {
  document.title = `Booked ${totalRooms} rooms`;
}, [totalRooms]);
```

## `useMemo`

`useMemo` caches a computed value when dependencies are unchanged.

```jsx
const filteredHotels = useMemo(
  () => computeFilteredHotels(),
  [cityFilter, ratingFilter],
);
```

## `useContext`

`useContext` accesses shared values without prop drilling.
