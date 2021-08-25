import React from "react";
import { Modal, StyleSheet } from "react-native";

import Listmodal from "./ListModal";
import NewListFormHeader from "../Form/NewListFormHeader";
import ScreenWrapper from "../ScreenWrapper";
import { colors } from "../../config/colors";

function ModalInput({ modalVisible, onPressModalBtn, onSelectItem }) {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <ScreenWrapper style={styles.container}>
        <NewListFormHeader
          title={"Select importance level"}
          withIcon={true}
          onPressModalBtn={onPressModalBtn}
        />
        <Listmodal onSelectItem={onSelectItem} />
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

export default ModalInput;
