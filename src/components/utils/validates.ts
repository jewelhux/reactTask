const validateName = (name: string) => {
  if (name.length > 4) return true;
  return false;
};

const validateImage = (name: string) => {
  if (name.length === 0) return false;
  return true;
};

export { validateName, validateImage };
