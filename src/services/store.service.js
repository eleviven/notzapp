export const getReduxStateFromStorage = () => {
  try {
    checkReduxState();
    const data = localStorage.getItem("reduxState");
    return JSON.parse(data);
  } catch (error) {
    throw new Error(error);
  }
};

export const setReduxStateToStorage = (reduxState) => {
  try {
    localStorage.setItem("reduxState", JSON.stringify(reduxState));
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

export const checkReduxState = () => {
  const data = localStorage.getItem("reduxState");
  if (!data) {
    setReduxStateToStorage({});
  }
};
