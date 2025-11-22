// #region snippet
export function emptyArray<T = any>(length: number) {
  return Array.from<T>({ length })
}

export function sayHello() {
  console.log('Hello from external.ts!')
}
// #endregion snippet
