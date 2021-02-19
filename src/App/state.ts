import constate from 'constate';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { ALL_DOG_BREEDS_URL, getBreedUrl } from './Dogs/apis';
import { AllBreedsMessage, ApiResponse, OneBreedMessage } from './Dogs/types';

export function useDogApp() {
  const [selectedBreed, setSelectedBreed] = useState<string | undefined>();

  const dogBreedsResponse = useQuery<ApiResponse<AllBreedsMessage>>(ALL_DOG_BREEDS_URL);
  const selectedDogBreedResponse = useQuery<ApiResponse<OneBreedMessage>>(
    getBreedUrl(selectedBreed),
    { enabled: Boolean(selectedBreed) }
  );

  const { data } = dogBreedsResponse;

  const dogBreeds = Object.keys(data?.message ?? {});

  return {
    selectedDogBreedResponse,
    dogBreedsResponse,
    dogBreeds,
    selectedBreed,
    setSelectedBreed,
  };
}

export const [DogAppProvider, useDogAppContext] = constate(useDogApp);
