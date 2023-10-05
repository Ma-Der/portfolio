type Cx = (...args: Array<string | boolean | null | undefined>) => string;
export const cx: Cx = (...args) => {
  return args
    .flat()
    .filter(
      (x: string | boolean | null | undefined) =>
        x !== null && x !== undefined && typeof x !== "boolean"
    )
    .join(" ");
};
