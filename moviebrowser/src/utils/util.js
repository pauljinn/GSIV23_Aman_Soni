export function isNullOrUndefined(value) {
  return (
    value === null || value === undefined || value.length === 0 || value === ""
  );
}

export function isOverviewPresent(movie) {
  return !isNullOrUndefined(movie.overview);
}

export function isImagePresent(movie) {
  return (
    !isNullOrUndefined(movie.backdrop_path) ||
    !isNullOrUndefined(movie.poster_path)
  );
}
