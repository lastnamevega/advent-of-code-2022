function getDirectory() {
  return new URL(".", import.meta.url).pathname;
}

export function getRoot() {
  return getDirectory().split("/src/lib")[0];
}
