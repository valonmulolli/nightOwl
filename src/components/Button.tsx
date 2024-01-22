import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { BottomSheetMethods } from "./BottomSheet";

type Props = {
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
};

const Button = ({ bottomSheetRef }: Props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        bottomSheetRef.current?.open();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Change theme</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00fdff",
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
    color: "#fffff1",
    textAlign: "center",
  },
});
