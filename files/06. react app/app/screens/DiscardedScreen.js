import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "../config/colors";
import { Helpers } from "../utils";

import EmptyList from "../components/EmptyList";
import FormModal from "../components/Modal/FormModal";
import Lists from "../components/Lists";
import routes from "../navigation/routes";
import ScreenWrapper from "../components/ScreenWrapper";

import listsApi from "../auth/listsApi";

function AllListsScreen({ navigation }) {
  const { lists, getAllLists, updateList, discardList } = listsApi();
  const [modal, setModal] = useState(false);
  const [selectedList, setSelectedList] = useState("");
  const [initialVal, setInitialVal] = useState(Helpers.initialVal());

  useEffect(() => {
    getAllLists();
  }, []);

  // function runs when the any of the SWIPE BUTTONS
  // are clicked like EDIT, DELETE, DISCARD
  const handleActionButton = (actionButtonType, item) => {
    if (actionButtonType === "edit") {
      setSelectedList(item.id);
      setInitialVal({ listname: item.listname, urgency: item.urgency });
      setModal(true);
    } else {
      discardList(item);
      clearState();
    }
  };

  // function to UPDATE a new list
  const handleSubmit = (listInput) => {
    updateList(selectedList, listInput);
    clearState();
  };

  // clear the state in this function
  const clearState = () => {
    setModal(false);
    setSelectedList("");
    setInitialVal(Helpers.initialVal());
  };

  const onPress = (list) => {
    navigation.navigate(routes.INDIVIDUAL, list);
  };

  const list = () => {
    if (lists.length > 0) {
      return (
        <Lists
          onPress={onPress}
          onPressActionBtn={handleActionButton}
          data={lists}
          btnType="main"
        />
      );
    } else {
      return <EmptyList />;
    }
  };

  return (
    <ScreenWrapper style={styles.wrapper}>
      <View style={styles.container}>{list()}</View>
      <FormModal
        title="Edit list"
        modalVisible={modal}
        initialVal={initialVal}
        onPressModalBtn={clearState}
        onSubmit={handleSubmit}
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

export default AllListsScreen;
