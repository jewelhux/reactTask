const validateName = (name: string) => {
  if (name.length > 4) return true;
  return false;
};

const validateImage = (name: string) => {
  if (name.length === 0) return false;
  return true;
};

const validateDate = (name: string) => {
  const inputDate = new Date(name);
  const currentDate = new Date();

  if (inputDate > currentDate) {
    return true;
  }
  return false;
};

export { validateName, validateImage, validateDate };
