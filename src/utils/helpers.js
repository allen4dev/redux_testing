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

export function convertResult(result) {
  return {
    [result.id]: {
      ...result,
    },
  };
}
