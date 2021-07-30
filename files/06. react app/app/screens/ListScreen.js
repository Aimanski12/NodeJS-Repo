import React, { useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import HeaderRight from "../navigation/HeaderRightButton";
import ScreenWrapper from "../components/ScreenWrapper";
import EmptyList from "../components/EmptyList";
import FormModal from "../components/Modal/FormModal";
import { colors } from "../config/colors";
import Lists from "../components/Lists";

function ListScreen({ navigation, route }) {
  const [modal, setModal] = useState(false);
  const [entry, setEntry] = useState("");
  const [initialVal, setInitialVal] = useState({
    listname: "",
    urgency: "",
  });
  const item = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: item.listname,
      headerRight: () => (
        <HeaderRight
          onPress={() => {
            setEntry("new");
            setModal(true);
          }}
        />
      ),
    });
  });

  // function runs when the any of the SWIPE BUTTONS
  // are clicked like EDIT, DELETE, DISCARD
  const handleActionButton = (actionButtonType, item) => {
    if (actionButtonType === "edit") {
      setInitialVal({ listname: item.listname, urgency: item.urgency });
      setEntry("edit");
      setModal(true);
    } else {
      console.log(actionButtonType);
    }
  };

  // function to trigger when the item is clicked, this function will,
  // update the stauts of the item as DONE or PENDING (TRU or FALSE)
  const onPress = (action) => {
    console.log(action);
  };

  // function to create a NEW LIST
  const handleSubmit = (listInput) => {
    if (entry === "new") {
      console.log("create new", listInput);
    } else {
      console.log("edit entry", listInput);
    }
    clearState();
  };

  // clear the state in this function
  const clearState = () => {
    setModal(false);
    setEntry("");
    setInitialVal({ listname: "", urgency: "" });
  };

  const list = () => {
    if (item.items.length > 0) {
      return (
        <Lists
          onPress={onPress}
          onPressActionBtn={handleActionButton}
          data={item.items}
          btnType="main"
        />
      );
    } else {
      return <EmptyList title={item.listname} />;
    }
  };

  return (
    <ScreenWrapper style={styles.wrapper}>
      <View style={styles.container}>
        {list()}
        {/* <Lists
          onPress={onPress}
          onPressActionBtn={handleActionButton}
          data={item.items}
          btnType="list"
        /> */}
      </View>
      <FormModal
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

export default ListScreen;
