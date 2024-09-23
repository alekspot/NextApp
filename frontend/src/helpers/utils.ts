import { MutableRefObject } from 'react';

type CreateFnType<T> = (index: number) => T;

export const createArray = <T>(
  fn: CreateFnType<T>,
  count: number,
): ReturnType<CreateFnType<T>>[] => {
  return Array.from({ length: count }).map((item, index) => {
    return fn(index);
  });
};

const getPosition = (ref: MutableRefObject<HTMLDivElement | null>) => {
  if (!ref.current) {
    return undefined;
  }

  const { right, top } = ref.current.getBoundingClientRect();

  return { '--x': `${right}px`, '--y': `${top}px` } as unknown as any;
};
