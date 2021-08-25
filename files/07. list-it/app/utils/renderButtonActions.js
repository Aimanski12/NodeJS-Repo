export const _renderButtonAction = (type) => {
  return actions[type];
};

const actions = {
  main: {
    edit: {
      icon: "pencil",
      title: "Edit",
      press: "edit",
    },
    delete: {
      icon: "delete-sweep-outline",
      press: "discard",
      title: "Discard",
    },
  },
  list: {
    edit: {
      icon: "pencil",
      title: "Edit",
      press: "edit",
    },
    delete: {
      icon: "delete",
      press: "delete",
      title: "Delete",
    },
  },
  discard: {
    edit: {
      icon: "clipboard-arrow-left-outline",
      title: "Put back",
      press: "putback",
    },
    delete: {
      icon: "delete-empty-outline",
      press: "delete",
      title: "Remove Forever",
    },
  },
};
