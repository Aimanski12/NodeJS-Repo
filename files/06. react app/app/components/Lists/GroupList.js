import React, { useRef } from "react";
import { View, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import { colors } from "../../config/colors";
import Date from "./Date";
import Icon from "./Icon";
import ListItem from "./ListItem";
import { listStyleWrapper } from "../../config/styles";

function GroupLists({
  date,
  icon,
  numberOfLines = 1,
  urgency,
  listname,
  onPress,
  renderRightActions,

  row,
  index,
  closeRow,
}) {
  // const swipeRef = useRef();
  // const closeSwipeable = () => {
  //   swipeRef?.current?.close();
  // };

  return (
    <Swipeable
      ref={(ref) => (row[index] = ref)}
      friction={2}
      renderRightActions={renderRightActions}
      onSwipeableOpen={() => closeRow(index)}
    >
      <TouchableHighlight underlayColor={colors.orangeTapBkg} onPress={onPress}>
        <View style={{ ...listStyleWrapper }}>
          <Icon icon={icon} />
          <ListItem
            listname={listname}
            urgency={urgency}
            numberOfLines={numberOfLines}
          />
          <Date date={date} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default GroupLists;
