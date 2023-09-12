export const saveDetailsToLocalStorage = (detailObj) => {
  localStorage.setItem("userDetail", detailObj);
};

export const getDetailsFromLocalStorage = () => {
  return localStorage.getItem("userDetail");
};
