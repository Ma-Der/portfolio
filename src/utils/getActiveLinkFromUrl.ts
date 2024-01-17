export function getActiveLinkFromUrl() {
  if (typeof window === "undefined") return '';

  const actualUrl = window.location.href;

  const lastPartFromUrl = actualUrl.split("/");
  const result = lastPartFromUrl[lastPartFromUrl.length - 1];

  return result;
}
