import { Dogs } from './Dogs/Dogs';
import { QueryProvider } from './QueryProvider';

export function App() {
  return (
    <QueryProvider>
      <h1>Dogs</h1>
      <Dogs />
    </QueryProvider>
  );
}
