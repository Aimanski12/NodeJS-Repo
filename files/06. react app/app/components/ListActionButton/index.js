import React from "react";
import { View, StyleSheet } from "react-native";

import ActionButton from "./ActionButton";

function ListItemActionButtons({ onPress, type }) {
  if (type === "main") {
    return (
      <View style={styles.container}>
        <ActionButton
          icon={"pencil"}
          backgroundColor={styles.editButton}
          onPress={() => onPress("edit")}
          title="Edit"
        />
        <ActionButton
          icon={"delete-sweep-outline"}
          backgroundColor={styles.deleteButton}
          onPress={() => onPress("discard")}
          title="Discard"
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActionButton
          icon={"pencil"}
          backgroundColor={styles.editButton}
          onPress={() => onPress("edit")}
          title="Edit"
        />
        <ActionButton
          icon={"delete"}
          backgroundColor={styles.deleteButton}
          onPress={() => onPress("delete")}
          title="Delete"
        />
      </View>
    );
  }
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
