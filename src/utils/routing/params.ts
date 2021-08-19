export const validateParam = (
  param?: string | string[],
  regex?: string | RegExp
): string | null => {
  if (!param || Array.isArray(param)) return null;

  if (!regex) return param;

  const result = param.match(regex);
  return result ? param : null;
};
