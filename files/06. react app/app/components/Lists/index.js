import React, { useRef } from "react";
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
          date={item.createdAt}
          urgency={item.urgency}
          icon={
            btnType === "main"
              ? "check-outline"
              : item.status
              ? "check-outline"
              : "circle-outline"
          }
          listname={item.listname}
          onPress={() => onPress(item)}
          renderRightActions={() => (
            <ListItemActionButtons
              onPress={(action) => onPressActionBtn(action, item)}
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
