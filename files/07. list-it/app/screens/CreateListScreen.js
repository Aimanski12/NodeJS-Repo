import React from "react";
import { StyleSheet, Keyboard } from "react-native";
import Contants from "expo-constants";

import { colors } from "../config/colors";
import { Helpers } from "../utils";

import listsApi from "../auth/listsApi";
import ListForm from "../components/Form/ListForm";
import NewListFormHeader from "../components/Form/NewListFormHeader";
import ScreenWrapper from "../components/ScreenWrapper";
import routes from "../navigation/routes";

function CreateListScreen({ navigation }) {
  const { createList } = listsApi();

  const handleSubmit = (listinputs) => {
    Keyboard.dismiss();
    createList(listinputs);
    navigation.navigate(routes.MYLISTS);
  };

  return (
    <ScreenWrapper style={styles.container}>
      <NewListFormHeader title={"Create new Todo"} />
      <ListForm
        clearForm={true}
        initialVal={Helpers.initialVal()}
        onSubmit={handleSubmit}
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightOrange,
    paddingTop: Contants.statusBarHeight,
  },
});

export default CreateListScreen;
