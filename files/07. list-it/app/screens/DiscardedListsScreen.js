import React, { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "../config/colors";

import EmptyList from "../components/EmptyList";
import discardApi from "../auth/discardApi";
import Lists from "../components/Lists";
import ScreenWrapper from "../components/ScreenWrapper";

function DiscardedListScreen({ navigation, route }) {
  const { discardedLists } = discardApi();
  const lists = discardedLists.filter((i) => i.id === route.params.id)[0];

  useLayoutEffect(() => {
    navigation.setOptions({ title: lists.listname });
  });

  const handleActionButton = () => {};
  const onPress = () => {};

  const listItems = () => {
    if (lists.lists.length > 0) {
      return (
        <Lists
          onPress={onPress}
          onPressActionBtn={handleActionButton}
          data={lists.lists}
          btnType="discardedList"
        />
      );
    } else {
      return <EmptyList title={list.listname} />;
    }
  };

  return (
    <ScreenWrapper style={styles.wrapper}>
      <View style={styles.container}>{listItems()}</View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: colors.lightOrange,
  },
});

export default DiscardedListScreen;
