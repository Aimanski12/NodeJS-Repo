import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { colors, levelColors } from "../../config/colors";
import fonts from "../../config/font";

function ListItem({ listname, numberOfLines, urgency }) {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.font, { color: levelColors(urgency) }]}
        numberOfLines={numberOfLines}
      >
        {listname}
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
});

export default ListItem;
