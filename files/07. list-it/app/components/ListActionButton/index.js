import React from "react";
import { View, StyleSheet } from "react-native";

import { Helpers } from "../../utils";
import ActionButton from "./ActionButton";

function ListItemActionButtons({ onPress, type }) {
  const btnAction = Helpers.renderButtonAction(type);

  return (
    <View style={styles.container}>
      <ActionButton
        icon={btnAction.edit.icon}
        backgroundColor={styles.editButton}
        onPress={() => onPress(btnAction.edit.press)}
        title={btnAction.edit.title}
      />
      <ActionButton
        icon={btnAction.delete.icon}
        backgroundColor={styles.deleteButton}
        onPress={() => onPress(btnAction.delete.press)}
        title={btnAction.delete.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    flexDirection: "row",
  },
  deleteButton: {
    backgroundColor: "#FFADAD",
  },
  editButton: {
    backgroundColor: "#E6FFE2",
  },
});

export default ListItemActionButtons;
