import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { colors } from "../../config/colors";
import { Helpers } from "../../utils";
import fonts from "../../config/font";

function ListDate({ btnType, item }) {
  return (
    <View style={styles.container}>
      {btnType === "main" ? (
        <>
          <View style={styles.itemWrapper}>
            <Text style={[styles.font, styles.itemStyle]}>
              {Helpers.getLength(item.lists)}
            </Text>
          </View>
          <View style={styles.dateWrapper}>
            <Text style={[styles.font, styles.dateStyle]}>
              {Helpers.getTime(item.createdAt)}
            </Text>
          </View>
        </>
      ) : (
        <Text style={[styles.font, styles.singleItem]}>
          {Helpers.getTime(item.createdAt)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "20%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  itemWrapper: {
    width: "100%",
    marginTop: 16,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  dateWrapper: {
    width: "100%",
    marginTop: 5,
    alignItems: "flex-end",
  },
  font: {
    fontSize: 11,
    fontFamily: fonts.primary,
    color: colors.timegray,
    textAlign: "right",
    fontWeight: "700",
  },
  singleItem: {
    fontSize: 13,
  },
  itemStyle: {
    fontSize: 13,
  },
  dateStyle: {
    fontSize: 12,
    color: colors.gray,
    fontStyle: "italic",
  },
});

export default ListDate;
