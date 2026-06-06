# React Elements and JSX

- Refer to code from `Course-HandsOn/react-project/src/App.jsx` and `Course-HandsOn/react-project/src/main.jsx` for examples of creating and rendering React elements using JSX.
- React elements are the building blocks of React applications. They are plain JavaScript objects that represent a piece of the UI. React elements are created using JSX, which is a syntax extension that allows you to write HTML-like code in your JavaScript files.
- JSX is not HTML, but it looks similar. It allows you to write UI code in a more declarative way. When you write JSX, it gets transformed into JavaScript function calls that create React elements.
- For example, the JSX code `<h1>Hello, world!</h1>` gets transformed into `React.createElement('h1', null, 'Hello, world!')`.
- React elements can be nested, which allows you to create complex UIs by combining simpler components. For example, you can create a `HotelCard` component that contains a `HotelName` component and a `HotelDescription` component, and then use the `HotelCard` component to display information about a hotel.
- React elements are immutable, which means that once they are created, they cannot be changed.
- When the state of a component changes, React creates a new React element tree and compares it to the previous tree. This process is called reconciliation, and it allows React to efficiently update the DOM by only changing the parts that have actually changed.
- React elements can also be created using the `React.createElement` function directly, without using JSX. However, using JSX is generally more convenient and easier to read, especially for complex UIs.

## Creating React Elements

- You can create React elements using JSX or the `React.createElement` function. JSX is more commonly used because it is more concise and easier to read.
- When you create a React element, you can specify the type of element (e.g., `div`, `h1`, `p`), any attributes (e.g., `className`, `id`), and any children (e.g., text, other elements).
- For example, you can create a React element for a hotel card like this:

```jsx
const hotelCard = (
  <div className="hotel-card">
    <h2>Hotel Name</h2>
    <p>Hotel Description</p>
  </div>
);
```

- This JSX code creates a React element that represents a `div` with a class of `hotel-card`, containing an `h2` element for the hotel name and a `p` element for the hotel description.
- You can also create the same React element using the `React.createElement` function like this:

```jsx
const hotelCard = React.createElement(
  "div",
  { className: "hotel-card" },
  React.createElement("h2", null, "Hotel Name"),
  React.createElement("p", null, "Hotel Description"),
);
```

- Both of these examples create the same React element, but the JSX version is more concise and easier to read, especially as the structure of the UI becomes more complex.

## Rendering React Elements

- To render a React element to the DOM, you can use the `ReactDOM.render` function. This function takes a React element and a DOM node as arguments and renders the element into the DOM.
- For example, you can render the `hotelCard` element into a DOM node with the id of `root` like this:

```jsx
ReactDOM.render(hotelCard, document.getElementById("root"));
```

- In modern React applications, you typically use the `createRoot` function from the `react-dom/client` package to create a root and render your application. For example:

```jsx
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(hotelCard);
```

- This approach is recommended for React 18 and later, as it enables concurrent features and provides better performance.

## React Components

- React components are reusable pieces of UI that can be defined as functions or classes. They allow you to break down your UI into smaller, manageable pieces.
- A functional component is a JavaScript function that returns a React element. For example:

```jsx
function HotelCard({ name, description }) {
  return (
    <div className="hotel-card">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
```

- You can use this `HotelCard` component in your JSX like this:

```jsx
<HotelCard
  name="Hotel California"
  description="A lovely place with a lovely face."
/>
```

- This will render a `HotelCard` with the specified name and description. You can create multiple instances of the `HotelCard` component with different props to display information about different hotels.
- React components can also manage their own state and handle user interactions, making them powerful tools for building interactive UIs.

- createRoot() is a function from the react-dom/client package that creates a root for rendering your React application. It is used in React 18 and later to enable concurrent features and improve performance. You can use it like this:

```jsx
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

- This code creates a root for the DOM node with the id of "root" and renders the `App` component into that root. Using `createRoot` is recommended for modern React applications to take advantage of the latest features and optimizations.

- other functions are
  - `ReactDOM.render()`: This function is used in older versions of React (before React 18) to render a React element into the DOM. It takes a React element and a DOM node as arguments and renders the element into the DOM. For example:

```jsx
ReactDOM.render(<App />, document.getElementById("root"));
```

- `React.createElement()`: This function is used to create a React element without using JSX. It takes the type of element, any attributes, and any children as arguments and returns a React element. For example:

```jsx
const hotelCard = React.createElement(
  "div",
  { className: "hotel-card" },
  React.createElement("h2", null, "Hotel Name"),
  React.createElement("p", null, "Hotel Description"),
);
```
- `React.createElement()` is typically used under the hood when you write JSX, as JSX gets transformed into calls to `React.createElement()`. However, it can also be used directly if you prefer not to use JSX. 
