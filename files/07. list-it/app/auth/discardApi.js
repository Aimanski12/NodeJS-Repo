import { useContext } from "react";
import AppContext from "./context";

import { Helpers } from "../utils";
import { FirebaseAPI } from "./firebaseApi";
import actions from "../utils/actions";

export default discardApi = () => {
  const { user, lists, discardedLists, setLists, setDiscardedLists } =
    useContext(AppContext);

  // delete discarded lists forever
  const removeList = (oldItem) => {
    const newDiscardedLists = discardedLists.filter((i) => i.id !== oldItem.id);
    setDiscardedLists(newDiscardedLists);
    FirebaseAPI.save(user, lists, newDiscardedLists);
  };

  // putback a discarded list to the lists
  const putBackList = (oldItem) => {
    lists.push(oldItem);
    const newDiscardedLists = discardedLists.filter((i) => i.id !== oldItem.id);
    setLists(lists);
    setDiscardedLists(newDiscardedLists);
    FirebaseAPI.save(user, lists, newDiscardedLists);
  };

  return {
    discardedLists,
    putBackList,
    removeList,
  };
};
