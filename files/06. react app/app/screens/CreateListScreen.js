import React, { useState } from "react";
import { StyleSheet, Keyboard } from "react-native";
import Contants from "expo-constants";
// import { useFormikContext } from "formik";

import { colors } from "../config/colors";
import ScreenWrapper from "../components/ScreenWrapper";
import NewListFormHeader from "../components/Form/NewListFormHeader";
import routes from "../navigation/routes";
import ListForm from "../components/Form/ListForm";

function CreateListScreen({ navigation }) {
  // const { resetForm } = useFormikContext();
  const [initialVal, setInitialVal] = useState({
    listname: "",
    urgency: "",
  });

  const handleSubmit = (listinputs) => {
    // await setInitialVal(listinputs);
    Keyboard.dismiss();
    // console.log("initial", initialVal);
    console.log("create new", listinputs);
    // resetForm();
    // console.log(initialVal);
    setTimeout(() => {
      // resetForm();
      navigation.navigate(routes.MYLISTS);
    }, 650);
  };

  return (
    <ScreenWrapper style={styles.container}>
      <NewListFormHeader title={"Create New List"} />
      <ListForm
        onSubmit={handleSubmit}
        initialVal={initialVal}
        clearForm={true}
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Contants.statusBarHeight,
    backgroundColor: colors.lightOrange,
  },
});

export default CreateListScreen;
