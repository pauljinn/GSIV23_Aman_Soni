export function isNullOrUndefined(value) {
  return (
    value === null || value === undefined || value.length === 0 || value === ""
  );
}
