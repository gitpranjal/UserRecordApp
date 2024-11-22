import React, { useState } from "react";
import { Text, StyleSheet, FlatList, View, TouchableOpacity, ImageBackground } from "react-native";
import UserCard from "../components/UserCard";

const UserListScreen = (props) => {
  const addNewUser = (userObj) => {
    let newUserList = [...userlist];
    newUserList.push(userObj);
    setUserlist(newUserList);
  };

  const deleteUser = (userName) => {
    let newUserList = [...userlist];
    newUserList = newUserList.filter((userObj) => userObj.name !== userName);
    setUserlist(newUserList);
    console.log(newUserList);
  };

  const [userlist, setUserlist] = useState([
    { name: "Donald Trump", age: "80", department: "MCD" },
  ]);

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <FlatList
          data={userlist}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("UserDetail", {
                    ...item,
                    editable: false,
                    userDeleteFunction: deleteUser,
                  });
                }}
              >
                <UserCard details={item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(user) => user.name}
          style={styles.list}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            props.navigation.navigate("UserDetail", {
              editable: true,
              userAddFunction: addNewUser,
            });
          }}
        >
          <Text style={styles.addButtonText}>+ Add New User</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 16,
  },
  list: {
    flex: 1,
    marginBottom: 20,
  },
  addButton: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    backgroundColor: "#3a4ca1",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserListScreen;
