import { v4 as uuidv4 } from "uuid";
import { _getTime, _getLength } from "./listActions";
import { _renderButtonAction } from "./renderButtonActions";
import actions from "./actions";

// helper function that returns values
export const Helpers = (function () {
  const _generateVal = () => {
    return generateValues();
  };

  // initial values for a form
  const _initValues = {
    listname: "",
    urgency: "",
  };

  // generic function to CREATE, EDIT, UPDATE, DELTE item in a list
  const _updateArray = (obj, action) => {
    return obj.lists.map((list) => {
      if (obj.id === list.id) return getAction(action, obj, list);
      return list;
    });
  };

  // create a new list
  const _createList = (lists, newList) => {
    return [
      ...lists,
      {
        ...newList,
        ...generateValues(),
        lists: [],
      },
    ];
  };

  return {
    createList(obj, newList) {
      return _createList(obj, newList);
    },
    generateVal() {
      return _generateVal();
    },
    getLength(lists) {
      return _getLength(lists);
    },
    getTime(time) {
      return _getTime(time);
    },
    initialVal() {
      return _initValues;
    },
    renderButtonAction(types) {
      return _renderButtonAction(types);
    },
    updateArray(obj, action) {
      return _updateArray(obj, action);
    },
  };
})();

//
//
//
//
//
// action fuction that will sort the array according to actions
const getAction = (action, obj, list) => {
  if (action === actions.ADDITEM) return addNewItem(obj, list);
  if (action === actions.DELETEITEM) return deleteItem(obj, list);
  if (action === actions.SETTODONE) return setToDone(obj, list);
  if (action === actions.UPDATEITEM) return updateItem(obj, list);
  if (action === actions.UPDATELIST) return updateList(obj, list);
};

// add a new ITEM in a LIST
const addNewItem = (obj, list) => {
  return {
    ...list,
    lists: [
      ...list.lists,
      {
        ...obj.newItem,
        ...generateValues(),
      },
    ],
  };
};

// delete ITEM in a LIST
const deleteItem = (obj, list) => {
  return {
    ...list,
    lists: list.lists.filter((i) => i.id !== obj.itemId),
  };
};

// generate values
const generateValues = () => {
  return {
    id: uuidv4(),
    createdAt: new Date().getTime(),
    isFinished: false,
  };
};

// update an ITEM in a LIST
const updateItem = (obj, list) => {
  return {
    ...list,
    lists: list.lists.map((i) => {
      if (i.id === obj.itemId) {
        return {
          ...i,
          ...obj.newItemValue,
        };
      }
      return i;
    }),
  };
};

// update values in a LIST
const updateList = (obj, list) => {
  return {
    ...list,
    ...obj.newValues,
  };
};

// set ITEM to done in a LIST
const setToDone = (obj, list) => {
  return {
    ...list,
    lists: list.lists.map((i) => {
      if (i.id === obj.itemId) {
        return {
          ...i,
          isFinished: !i.isFinished,
        };
      }
      return i;
    }),
  };
};
