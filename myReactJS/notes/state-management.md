# State Management

State is the current data for a component. In React, state lives in the component that owns it.

## Lifting state up

When two components need the same data, move state to the nearest shared parent.

```jsx
function App() {
  const [selectedCity, setSelectedCity] = useState("all");
  return <HotelFilters city={selectedCity} onCityChange={setSelectedCity} />;
}
```

## Derived state

Derived state is data computed from other state values.

```jsx
const filteredHotels = hotels.filter(...);
```

## When to use context

Context is useful for values shared across many components, such as a theme or authenticated user.

## When to use external state

For larger apps, consider React Query, Redux Toolkit, Zustand, or Recoil.
