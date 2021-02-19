import { Dog } from './Dogs/Dog';
import { Dogs } from './Dogs/Dogs';
import { DogAppProvider } from './state';

export function App() {
  return (
    <>
      <DogAppProvider>
        <h1>Dogs</h1>
        <Dogs />
        <Dog />
      </DogAppProvider>
    </>
  );
}
