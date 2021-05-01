import { useDogAppContext } from '../state';

export const Dog = () => {
  const { selectedBreed, selectedDogBreedResponse } = useDogAppContext();

  const { isFetching, data } = selectedDogBreedResponse;
  if (!selectedBreed) {
    return null;
  }
  if (isFetching || !data) {
    return <h1>Loading .....</h1>;
  }
  return <img src={data.message} alt="dog" />;
};
