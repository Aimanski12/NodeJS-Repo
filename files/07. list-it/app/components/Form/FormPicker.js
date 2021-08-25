import React, { useState } from "react";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ErrorMessage from "./ErrorMessage";
import ModalInput from "../../components/Modal";
import { colors } from "../../config/colors";
import { levelColors } from "../../config/colors";
import fonts from "../../config/font";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";

function FormField({ name }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { errors, touched, setFieldValue, values } = useFormikContext();

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name="alert-box-outline"
            size={20}
            style={styles.iconLeft}
            color={colors.gray}
          />
          <Text
            style={[
              styles.textInput,
              {
                color:
                  values.urgency === ""
                    ? colors.gray
                    : levelColors(values.urgency),
              },
            ]}
          >
            {values.urgency === "" ? "Importance Level" : values.urgency}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={26}
            color={colors.gray}
            style={styles.iconRight}
          />
        </View>
      </TouchableWithoutFeedback>
      <ModalInput
        modalVisible={modalVisible}
        onPressModalBtn={() => setModalVisible(false)}
        formType="list"
        onSelectItem={(val) => {
          setModalVisible(false);
          setFieldValue(name, val);
        }}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  iconLeft: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: -10,
  },
  container: {
    width: "86%",
    height: 50,
    marginHorizontal: "7%",
    marginVertical: 7,
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "flex-start",
    borderRadius: 27,
    alignItems: "center",
    padding: 15,
  },
  textInput: {
    width: "87%",
    color: colors.gray,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.2,
    fontFamily: fonts.primary,
  },
});

export default FormField;
