import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import BackDrop from "./BackDrop";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type Props = {};

const BottomSheet = (props: Props) => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const pan = Gesture.Pan().onUpdate((event) => {
    if (event.translationY < 0) {
      translateY.value = withSpring(0, {
        damping: 100,
        stiffness: 400,
      });
    } else {
      translateY.value = withSpring(event.translationY, {
        damping: 100,
        stiffness: 400,
      });
    }
  }).onEnd(() => {
    if (translateY.value > 50) {
      translateY.value = withSpring(500, {
        damping: 100,
        stiffness: 400,
      });
    } else {
      translateY.value = withSpring(0, {
        damping: 100,
        stiffness: 400,
      });
    }
  })

  return (
    <>
      <BackDrop />
      <GestureDetector gesture={pan}>
        <Animated.View
          style={[
            styles.container,
            { width: width * 0.92, bottom: insets.bottom },
            animatedStyle,
          ]}
        >
          <View style={styles.line} />
          <Text style={styles.textTitle}>Choose a style</Text>
          <Text style={styles.text}>Pop or subtle, Day or nigh</Text>
          <Text style={styles.text}>Customize your interface</Text>
        </Animated.View>
      </GestureDetector>
    </>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  line: {
    backgroundColor: "#000",
    position: "absolute",
    top: 0,
    width: 40,
    height: 4,
    borderRadius: 8,
  },
  textTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    marginTop: 40,
    marginBottom: 14,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
  },
});
