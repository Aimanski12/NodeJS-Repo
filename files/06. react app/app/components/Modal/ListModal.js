import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../config/colors";
import fonts from "../../config/font";
import { levelColors } from "../../config/colors";

const levels = ["Less Important", "Important", "Very Important"];

function ListModal({ onSelectItem }) {
  return (
    <FlatList
      data={levels}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableHighlight
          underlayColor={colors.white}
          onPress={() => onSelectItem(item)}
        >
          <View style={styles.list}>
            <MaterialCommunityIcons
              name="alert-box-outline"
              size={20}
              style={styles.icon}
              color={colors.gray}
            />
            <Text style={[styles.text, { color: levelColors(item) }]}>
              {item}
            </Text>
          </View>
        </TouchableHighlight>
      )}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  list: {
    flexDirection: "row",
    width: "86%",
    height: 60,
    marginHorizontal: "7%",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomColor: colors.linegray,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: fonts.primary,
    color: colors.green,
  },
});

export default ListModal;
