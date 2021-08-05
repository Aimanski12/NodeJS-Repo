import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { colors, levelColors } from "../../config/colors";
import fonts from "../../config/font";

function ListItem({ item, numberOfLines }) {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.font,
          { color: levelColors(item.urgency) },
          item.isFinished ? styles.isDone : null,
        ]}
        numberOfLines={numberOfLines}
      >
        {item.listname}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "70%",
  },
  font: {
    fontSize: 18,
    fontFamily: fonts.primary,
    fontWeight: "700",
    color: colors.green,
  },
  isDone: {
    textDecorationLine: "underline line-through",
  },
});

export default ListItem;
