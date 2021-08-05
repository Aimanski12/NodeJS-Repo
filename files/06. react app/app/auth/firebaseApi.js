import app from "./firebase";

export const FirebaseAPI = (function () {
  const _save = (user, lists, discardedLists) => {
    app.firestore().collection("lists").doc(user.uid).set({
      owner: user.email,
      lists,
      discardedLists,
    });
  };

  const _getAllLists = async (user) => {
    return await app
      .firestore()
      .collection("lists")
      .doc(user.uid)
      .get()
      .then((res) => {
        const data = res.data();
        if (data) {
          return { list: data.lists, discarded: data.discardedLists };
        }
      })
      .catch((err) => console.log(err));
  };

  return {
    save(user, lists, discardedLists) {
      return _save(user, lists, discardedLists);
    },
    getAllLists(user) {
      return _getAllLists(user);
    },
  };
})();
