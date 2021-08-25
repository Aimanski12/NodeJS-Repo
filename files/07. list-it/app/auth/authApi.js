import { auth } from "./firebase";

export default authApi = () => {
  // login to firebase
  const logIn = async ({ email, password }) => {
    return await auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        return false;
      })
      .catch((err) => {
        if (err) return true;
      });
  };

  // register user using firebase
  const register = async ({ name, email, password }) => {
    return await auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        return false;
      })
      .catch((err) => {
        if (err) return true;
      });
  };

  // logout user using firebase
  const logOut = () => {
    auth.signOut();
  };

  return { register, logIn, logOut };
};
