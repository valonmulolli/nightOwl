import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import Button from "../components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BottomSheet, { BottomSheetMethods } from "../components/BottomSheet";

type Props = {};

const Setting = (props: Props) => {
  const insets = useSafeAreaInsets();
  const BottomSheetRef = useRef<BottomSheetMethods>(null);
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <Button bottomSheetRef={BottomSheetRef}/>
      <BottomSheet ref={BottomSheetRef}/>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff1",
  },
});
