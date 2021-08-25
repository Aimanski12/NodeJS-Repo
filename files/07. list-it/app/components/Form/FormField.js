import React from "react";
import { useFormikContext } from "formik";
// import { Keyboard } from "react-native";

import ErrorMessage from "./ErrorMessage";
import TextInput from "../TextInput";

function FormField({ name, ...otherProps }) {
  const { errors, handleChange, touched, setFieldTouched, values } =
    useFormikContext();
  return (
    <>
      <TextInput
        onBlur={() => {
          // Keyboard.dismiss();
          setFieldTouched(name);
        }}
        value={values[name]}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormField;
