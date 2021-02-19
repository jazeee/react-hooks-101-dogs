import { useDogAppContext } from '../state';

export const Dogs = () => {
  const { dogBreeds, selectedBreed, setSelectedBreed, dogBreedsResponse } = useDogAppContext();

  function onClick(dogBreed: string) {
    setSelectedBreed(dogBreed);
  }

  if (dogBreedsResponse.isFetching) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2>All breeds</h2>
      {dogBreeds?.map((dogBreed) => {
        return (
          <button
            type="button"
            key={dogBreed}
            onClick={() => {
              onClick(dogBreed);
            }}
            style={{
              backgroundColor: dogBreed === selectedBreed ? 'lightBlue' : undefined,
            }}
          >
            {dogBreed}
          </button>
        );
      })}
    </>
  );
};
