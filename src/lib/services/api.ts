/**
 * Simulates a network delay for fake API calls.
 * @param ms Milliseconds to delay
 */
export const delay = (ms: number = 500) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Wraps data in a promise with a delay.
 */
export async function fakeFetch<T>(data: T, delayMs: number = 300): Promise<T> {
  await delay(delayMs);
  return data;
}
