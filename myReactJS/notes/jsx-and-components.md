# JSX and Components

JSX is a syntax extension that lets you write UI code inside JavaScript. It uses curly braces for dynamic values.

```jsx
function HotelDescription({ description }) {
  return <p>{description}</p>;
}
```

## Component composition

Think of components like Lego blocks. Build small pieces and combine them.

- Parent component passes data and callbacks down through props.
- Child component stays focused on rendering.

## Example

```jsx
function HotelCard({ hotel, onBook }) {
  return (
    <article>
      <h3>{hotel.name}</h3>
      <button onClick={() => onBook(hotel)}>Book</button>
    </article>
  );
}
```

## Best practices

- Keep components small and focused.
- Use descriptive names.
- Avoid deeply nested prop trees when possible.
