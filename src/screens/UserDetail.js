import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Keyboard, TouchableOpacity } from "react-native";

const UserDetail = (props) => {
  const editable = props.navigation.getParam("editable");
  const passedName = props.navigation.getParam("name");
  const passedAge = props.navigation.getParam("age");
  const passedDepartment = props.navigation.getParam("department");
  const userAddFunction = props.navigation.getParam("userAddFunction");
  const userDeleteFunction = props.navigation.getParam("userDeleteFunction");

  const [name, setName] = useState(!editable ? passedName : "");
  const [age, setAge] = useState(!editable ? passedAge : "");
  const [department, setDepartment] = useState(!editable ? passedDepartment : "");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{editable ? "Add New User" : "User Details"}</Text>

      <TextInput
        style={[styles.input, !editable && styles.nonEditableInput]}
        placeholder="Name"
        maxLength={20}
        onBlur={Keyboard.dismiss}
        value={name}
        onChangeText={(newText) => setName(newText)}
        editable={editable}
      />

      <TextInput
        style={[styles.input, !editable && styles.nonEditableInput]}
        placeholder="Age"
        maxLength={20}
        onBlur={Keyboard.dismiss}
        value={age}
        onChangeText={(newText) => setAge(newText)}
        editable={editable}
        keyboardType="numeric"
      />

      <TextInput
        style={[styles.input, !editable && styles.nonEditableInput]}
        placeholder="Department"
        maxLength={20}
        onBlur={Keyboard.dismiss}
        value={department}
        onChangeText={(newText) => setDepartment(newText)}
        editable={editable}
      />

      <TouchableOpacity
        style={[styles.button, editable ? styles.doneButton : styles.deleteButton]}
        onPress={() => {
          if (editable) {
            
            try {
                userAddFunction({ name: name, age: age, department: department })
    
              } catch (error) {
                console.error("Error adding user:", error);
              }
          } else {
            userDeleteFunction(name);
          }
          props.navigation.goBack();
        }}
      >
        <Text style={styles.buttonText}>{editable ? "Done" : "Delete User"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3a4ca1",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  nonEditableInput: {
    backgroundColor: "#e9ecef",
    color: "#6c757d",
  },
  button: {
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  doneButton: {
    backgroundColor: "#3a4ca1",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserDetail;
