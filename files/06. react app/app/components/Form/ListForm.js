import React from "react";
import * as Yup from "yup";

import Form from "./Form";
import FormField from "./FormField";
import FormPicker from "./FormPicker";
import SubmitButton from "./SubmitButton";

const validationSchema = Yup.object().shape({
  listname: Yup.string().required().label("List name"),
  urgency: Yup.string().required().label("Importance level"),
});

function ListForm({ initialVal, onSubmit, clearForm = false }) {
  return (
    <Form
      initialValues={{
        listname: initialVal.listname,
        urgency: initialVal.urgency,
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <FormField
        autoCorrect={false}
        icon="playlist-check"
        name="listname"
        placeholder="List name"
      />
      <FormPicker name="urgency" />
      <SubmitButton title="Add new list" clearForm={clearForm} />
    </Form>
  );
}

export default ListForm;
