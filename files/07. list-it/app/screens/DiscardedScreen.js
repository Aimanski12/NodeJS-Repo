import React, { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "../config/colors";

import authApi from "../auth/authApi";
import discardApi from "../auth/discardApi";
import EmptyList from "../components/EmptyList";
import HeaderRight from "../components/HeaderRightButtons";
import Lists from "../components/Lists";
import routes from "../navigation/routes";
import ScreenWrapper from "../components/ScreenWrapper";

function DiscardedListScreen({ navigation }) {
  const { putBackList, discardedLists, removeList } = discardApi();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight
          onPress={() => authApi().logOut()}
          icon="logout"
          title="Logout"
        />
      ),
      title: list.listname,
    });
  });

  // function runs when the any of the SWIPE BUTTONS
  // are clicked like EDIT, DELETE, DISCARD
  const handleActionButton = (actionButtonType, item) => {
    if (actionButtonType === "putback") {
      putBackList(item);
    } else {
      removeList(item);
    }
  };

  const onPress = (list) => {
    navigation.navigate(routes.DISCARDEDLISTS, list);
  };

  const list = () => {
    if (discardedLists.length > 0) {
      return (
        <Lists
          onPress={onPress}
          onPressActionBtn={handleActionButton}
          data={discardedLists}
          btnType="discard"
        />
      );
    } else {
      return <EmptyList />;
    }
  };

  return (
    <ScreenWrapper style={styles.wrapper}>
      <View style={styles.container}>{list()}</View>
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
