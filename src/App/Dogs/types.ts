export type ApiResponse<T> = {
  status: 'success';
  message: T;
};

export type AllBreedsMessage = {
  [key: string]: string[];
};

export type OneBreedMessage = string;
