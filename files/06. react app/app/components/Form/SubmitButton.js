import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import Button from "../Button";

function SubmitButton({ title, clearForm }) {
  const { handleSubmit, resetForm, values } = useFormikContext();

  const submit = () => {
    if (clearForm) {
      values.listname !== "" && values.urgency !== "" ? reset() : null;
    }
  };

  const reset = () => {
    setTimeout(() => {
      resetForm();
    }, 450);
  };

  return (
    <View style={styles.inputContainer}>
      <Button
        title={title}
        onPress={() => {
          handleSubmit();
          submit();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "86%",
    height: 50,
    marginHorizontal: "7%",
  },
});

export default SubmitButton;
