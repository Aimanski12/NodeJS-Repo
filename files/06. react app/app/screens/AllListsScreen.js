import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import ScreenWrapper from "../components/ScreenWrapper";
import { colors } from "../config/colors";
import routes from "../navigation/routes";
import FormModal from "../components/Modal/FormModal";
import EmptyList from "../components/EmptyList";
import Lists from "../components/Lists";

import sample from "../config/sample";

function AllListsScreen({ navigation }) {
  const [modal, setModal] = useState(false);
  const [initialVal, setInitialVal] = useState({
    listname: "",
    urgency: "",
  });

  // function runs when the any of the SWIPE BUTTONS
  // are clicked like EDIT, DELETE, DISCARD
  const handleActionButton = (actionButtonType, item) => {
    if (actionButtonType === "edit") {
      setInitialVal({ listname: item.listname, urgency: item.urgency });
      setModal(true);
    } else {
      console.log(actionButtonType);
    }
  };

  // function to create a NEW LIST
  const handleSubmit = (listInput) => {
    console.log("group", listInput);
    clearState();
  };

  // clear the state in this function
  const clearState = () => {
    setModal(false);
    setInitialVal({ listname: "", urgency: "" });
  };

  const onPress = (item) => navigation.navigate(routes.INDIVIDUAL, item);

  const list = () => {
    if (sample.length > 0) {
      return (
        <Lists
          onPress={onPress}
          onPressActionBtn={handleActionButton}
          data={sample}
          btnType="main"
        />
      );
    } else {
      return <EmptyList />;
    }
  };

  return (
    <ScreenWrapper style={styles.wrapper}>
      <View style={styles.container}>
        {list()}
        {/* <EmptyList />
        <Lists
          onPress={onPress}
          onPressActionBtn={handleActionButton}
          data={sample}
          btnType="main"
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

export default AllListsScreen;
