import React from "react";

import Constants from "expo-constants";
import { View, StyleSheet, SafeAreaView } from "react-native";

function ScreenWrapper({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={styles.view}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default ScreenWrapper;
