const register = (name, email, password, phoneNumber) => {
  return true;
};

const login = (email, password) => {
  localStorage.setItem("user", JSON.stringify(email));
  return true;
};

const logout = () => {
  localStorage.clear();
  window.location.replace("/home");
};

const getCurrentUser = () => {
  if (!!localStorage.getItem("updatedUser")) {
    return JSON.parse(localStorage.getItem("updatedUser"));
  }
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser
};
