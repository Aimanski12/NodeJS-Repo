import { colors } from "./colors";

// default list wrapper styles
export const listStyleWrapper = {
  height: 70,
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottomColor: colors.linegray,
  borderBottomWidth: 1,
  backgroundColor: colors.lightOrange,
  paddingLeft: 10,
  paddingRight: 18,
};

// stack navigator header options
export const headerOptions = {
  headerTitleAlign: "center",
  headerTintColor: colors.orange,
  headerStyle: {
    backgroundColor: colors.lightOrange,
  },
};
