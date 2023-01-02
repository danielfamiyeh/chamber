export const assertExists = (obj: object) => {
  const [name] = Object.keys(obj);
  const [val] = Object.values(obj);

  if (!val) throw new Error(`An error occured: ${name} does is not defined`);
  return true;
};
