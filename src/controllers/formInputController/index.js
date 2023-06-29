export const hasExceededCharacters = (value, numberOfCharacters) => {
  if (value.length <= numberOfCharacters) {
    return false;
  }
  return true;
};

export const doesContainNumber = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (!isNaN(value[i]) && value[i] !== " ") {
      return true;
    }
  }

  return false;
};

export const hasUpperCase = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (value[i] >= "A" && value[i] <= "Z") {
      return true;
    }
  }

  return false;
};

export const doesDomainExist = (value) => {
  if (value.includes("@gmail.com") || value.includes("@outlook.com")) {
    return true;
  }

  return false;
};
