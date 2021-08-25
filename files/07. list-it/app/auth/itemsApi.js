import { useContext } from "react";
import AppContext from "./context";

import { Helpers } from "../utils";
import actions from "../utils/actions";
import { FirebaseAPI } from "./firebaseApi";

export default itemsApi = () => {
  const { user, lists, setLists, discardedLists } = useContext(AppContext);

  // create a new item in a list
  const createItem = (id, newItem) => {
    const newList = Helpers.updateArray(
      { id, lists, newItem },
      actions.ADDITEM
    );
    setLists(newList);
    FirebaseAPI.save(user, newList, discardedLists);
  };

  // delete a new item in a list
  const deleteItem = (id, itemId) => {
    const newList = Helpers.updateArray(
      { id, lists, itemId },
      actions.DELETEITEM
    );
    setLists(newList);
    FirebaseAPI.save(user, newList, discardedLists);
  };

  // set an item to done in a list
  const setItemDone = (id, itemId) => {
    const newList = Helpers.updateArray(
      { id, lists, itemId },
      actions.SETTODONE
    );
    setLists(newList);
    FirebaseAPI.save(user, newList, discardedLists);
  };

  // update an item in a list
  const updateItem = (id, itemId, newItemValue) => {
    const newList = Helpers.updateArray(
      { id, lists, itemId, newItemValue },
      actions.UPDATEITEM
    );
    setLists(newList);
    FirebaseAPI.save(user, newList, discardedLists);
  };

  return { createItem, deleteItem, lists, setItemDone, updateItem };
};
