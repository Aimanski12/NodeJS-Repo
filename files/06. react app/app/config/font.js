import { Platform } from "react-native";

export default {
  primary: Platform.OS === "android" ? "sans-serif" : "Avenir",
};
