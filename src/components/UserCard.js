import React from "react";
import { Text, View, StyleSheet } from "react-native";

const UserCard = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Name: {props.details.name}</Text>
      <Text style={styles.subtitle}>Age: {props.details.age}</Text>
      <Text style={styles.subtitle}>Department: {props.details.department}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#3a4ca1", // Deep blue background
    padding: 16,
    borderRadius: 12, // Rounded corners
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3, // Shadow for Android
  },
  title: {
    fontSize: 18,
    color: "#fff", // White text
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#dcdcdc", // Light grey text for secondary information
    marginBottom: 4,
  },
});

export default UserCard;
