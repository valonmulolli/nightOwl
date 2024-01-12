import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";

type Props = {};

const Button = (props: Props) => {
  return (
    <TouchableWithoutFeedback onPress={() => {
      console.log("Pressed");
    }}>
      <View style={styles.container}>
        <Text style={styles.text}>Change theme</Text>
      </View>
    </TouchableWithoutFeedback>
    // ?? time stamp 08:11
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F0F0",
    padding: 20,
    marginTop: 10,
    marginHorizontal: 30,
    borderRadius: 30,
    opacity: 0.8,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    textAlign: "center",
  },
});
