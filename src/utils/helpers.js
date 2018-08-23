export function convertResults(results) {
  return results.data.reduce(
    (initial, result) => ({
      ...initial,
      [result.id]: {
        ...result,
      },
    }),
    {},
  );
}
