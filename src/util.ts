export function randomIndex(listItem: unknown[]) {
  const randomIndex = Math.floor(Math.random() * listItem.length);
  return randomIndex;
}
