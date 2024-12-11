```javascript
// pages/about.js
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function About() {
  const data = { name: 'John Doe' };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div>
        <h1>About Page</h1>
        <p>This is the about page. Name: {data.name}</p>
        {/* Removed the problematic line: console.log(data.age); */}
      </div>
    </ErrorBoundary>
  );
}
```