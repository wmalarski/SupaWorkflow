export const validateParam = (
  param?: string | string[],
  regex?: string | RegExp
): string | null => {
  if (!param || Array.isArray(param)) return null;

  if (!regex) return param;

  const result = param.match(regex);
  return result ? param : null;
};

export const validateNumberParam = (
  param?: string | string[]
): number | null => {
  const result = validateParam(param, /\d+/);

  return result ? Number(result) : null;
};
