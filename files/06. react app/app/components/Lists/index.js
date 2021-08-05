import React from "react";
import { FlatList } from "react-native";
import GroupList from "./GroupList";
import ListItemActionButtons from "../ListActionButton";

function Lists({ btnType, data, onPress, onPressActionBtn }) {
  let row = [];
  let prevOpenedRow;
  const closeRow = (index) => {
    if (prevOpenedRow && prevOpenedRow !== row[index]) {
      prevOpenedRow.close();
    }
    prevOpenedRow = row[index];
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <GroupList
          item={item}
          btnType={btnType}
          onPress={() => onPress(item)}
          renderRightActions={() => (
            <ListItemActionButtons
              onPress={(action) => {
                closeRow(-1);
                onPressActionBtn(action, item);
              }}
              type={btnType}
            />
          )}
          index={index}
          row={row}
          closeRow={closeRow}
        />
      )}
    />
  );
}
export default Lists;
