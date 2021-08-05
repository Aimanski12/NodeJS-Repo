import React from "react";
import { View, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import { colors } from "../../config/colors";
import RightSection from "./RightSection";
import Icon from "./Icon";
import ListItem from "./ListItem";
import { listStyleWrapper } from "../../config/styles";

function GroupLists({
  item,
  btnType,
  numberOfLines = 1,
  onPress,
  renderRightActions,
  row,
  index,
  closeRow,
}) {
  return (
    <Swipeable
      ref={(ref) => (row[index] = ref)}
      friction={2}
      key={item.id}
      renderRightActions={renderRightActions}
      onSwipeableOpen={() => closeRow(index)}
    >
      <TouchableHighlight underlayColor={colors.orangeTapBkg} onPress={onPress}>
        <View style={{ ...listStyleWrapper }}>
          <Icon btnType={btnType} isFinished={item.isFinished} />
          <ListItem item={item} numberOfLines={numberOfLines} />
          <RightSection item={item} btnType={btnType} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default GroupLists;
