import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "../config/colors";
import { Helpers } from "../utils";

import EmptyList from "../components/EmptyList";
import FormModal from "../components/Modal/FormModal";
import itemsApi from "../auth/itemsApi";
import HeaderRight from "../components/HeaderRightButtons";
import Lists from "../components/Lists";
import ScreenWrapper from "../components/ScreenWrapper";

function ListScreen({ navigation, route }) {
  const { createItem, deleteItem, lists, setItemDone, updateItem } = itemsApi();
  const list = lists.filter((i) => i.id === route.params.id)[0];
  const [initialVal, setInitialVal] = useState(Helpers.initialVal());
  const [entry, setEntry] = useState("");
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [selectedList, setSelectedList] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          icon="pencil-plus"
          onPress={() => {
            setEntry("new");
            setModalTitle("Create new item");
            setModal(true);
          }}
          title="Add"
        />
      ),
      title: list.listname,
    });
  });

  // clear the state in this function
  const clearState = () => {
    setModal(false);
    setEntry("");
    setSelectedList("");
    setModalTitle("");
    setInitialVal(Helpers.initialVal());
  };

  // function runs when the any of the SWIPE BUTTONS
  // are clicked like EDIT, DELETE, DISCARD
  const handleActionButton = (actionButtonType, item) => {
    if (actionButtonType === "edit") {
      setSelectedList(item.id);
      setInitialVal({ listname: item.listname, urgency: item.urgency });
      setEntry("edit");
      setModalTitle("Edit list item");
      setModal(true);
    } else {
      deleteItem(list.id, item.id);
      clearState();
    }
  };

  // function to create a NEW LIST or UPDATE list
  const handleSubmit = (newItem) => {
    entry === "new"
      ? createItem(list.id, newItem)
      : updateItem(list.id, selectedList, newItem);
    clearState();
  };

  const listItems = () => {
    if (list.lists.length > 0) {
      return (
        <Lists
          onPress={onPress}
          onPressActionBtn={handleActionButton}
          data={list.lists}
          btnType="list"
        />
      );
    } else {
      return <EmptyList title={list.listname} />;
    }
  };

  // function to trigger when the list is clicked, this function will,
  // update the stauts of the list as DONE or PENDING (TRUE or FALSE)
  const onPress = (item) => {
    setItemDone(list.id, item.id);
  };

  return (
    <ScreenWrapper style={styles.wrapper}>
      <View style={styles.container}>{listItems()}</View>
      <FormModal
        initialVal={initialVal}
        modalVisible={modal}
        onPressModalBtn={clearState}
        onSubmit={handleSubmit}
        title={modalTitle}
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: colors.lightOrange,
  },
});

export default ListScreen;
