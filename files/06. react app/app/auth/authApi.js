import { auth } from "./firebase";

export default authApi = () => {
  const logIn = ({ email, password }) => {
    auth.signInWithEmailAndPassword(email, password);
  };

  const register = ({ name, email, password }) => {
    auth.createUserWithEmailAndPassword(email, password);
  };

  const logOut = () => {
    auth.signOut();
  };

  return { register, logIn, logOut };
};
