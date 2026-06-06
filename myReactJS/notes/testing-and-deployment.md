# Testing and Deployment

## Testing

Start with unit tests for components and custom hooks. Use React Testing Library or Vitest for lightweight testing.

- Test that components render expected text.
- Test user interactions and state changes.
- Keep tests focused on behavior, not implementation details.

## Build and deployment

This project uses Vite, which bundles the app for production.

```bash
npm run build
```

## Hosting

Popular deployment targets:

- Vercel
- Netlify
- GitHub Pages

## Production checklist

- Verify the app builds successfully.
- Confirm the bundle size is reasonable.
- Ensure the UI works at different screen sizes.
- Use environment variables for API keys or deployment settings.
