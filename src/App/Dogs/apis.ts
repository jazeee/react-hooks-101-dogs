export const ALL_DOG_BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';

export function getBreedUrl(dogBreed = '') {
  return `https://dog.ceo/api/breed/${dogBreed}/images/random`;
}
