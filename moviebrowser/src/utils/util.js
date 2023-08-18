import { IMAGE_BASE_URL } from "../constants/constant";

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

export function getImageUrl(movie) {
  return (
    IMAGE_BASE_URL +
    (!isNullOrUndefined(movie?.backdrop_path)
      ? movie?.backdrop_path
      : movie?.poster_path)
  );
}

export function minutesToHHMM(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMins = String(mins).padStart(2, "0");

  return `${formattedHours}:${formattedMins}`;
}
