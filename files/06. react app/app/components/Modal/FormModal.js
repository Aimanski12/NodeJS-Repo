import React from "react";
import { Modal, StyleSheet } from "react-native";

import ListForm from "../../components/Form/ListForm";
import NewListFormHeader from "../Form/NewListFormHeader";
import ScreenWrapper from "../ScreenWrapper";
import { colors } from "../../config/colors";

function FormModal({
  title = false,
  initialVal,
  modalVisible,
  onPressModalBtn,
  onSubmit,
}) {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <ScreenWrapper style={styles.container}>
        <NewListFormHeader
          title={title ? title : "Select importance levellll"}
          withIcon={true}
          onPressModalBtn={onPressModalBtn}
        />
        <ListForm onSubmit={onSubmit} initialVal={initialVal} />
      </ScreenWrapper>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgray,
  },
});

export default FormModal;
