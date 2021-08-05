import { useContext } from "react";
import AppContext from "./context";

import { Helpers } from "../utils";
import { FirebaseAPI } from "./firebaseApi";
import actions from "../utils/actions";

export default listsApi = () => {
  const { user, lists, setLists, discardedLists, setDiscardedLists } =
    useContext(AppContext);

  // on initial app load, get all list from firebase
  const getAllLists = async () => {
    const { list, discarded } = await FirebaseAPI.getAllLists(user);
    setLists(list);
    setDiscardedLists(discarded);
  };

  // create a new lists
  const createList = (newListData) => {
    const newList = Helpers.createList(lists, newListData);
    setLists(newList);
    FirebaseAPI.save(user, newList, discardedLists);
  };

  // update list values (importance and value)
  const updateList = (id, newValues) => {
    const newList = Helpers.updateArray(
      { id, lists, newValues },
      actions.UPDATELIST
    );
    setLists(newList);
    FirebaseAPI.save(user, newList, discardedLists);
  };

  // discard a list - transfer to discarded
  const discardList = (item) => {
    const newLists = lists.filter((i) => i.id !== item.id);
    const newDiscardedLists = [...discardedLists, item];
    setLists(newLists);
    setDiscardedLists(newDiscardedLists);
    FirebaseAPI.save(user, newLists, discardedLists);
  };

  return { lists, createList, updateList, discardList, getAllLists };
};
