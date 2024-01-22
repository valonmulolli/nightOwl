import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import BackDrop from "./BackDrop";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

type Props = {};

export interface BottomSheetMethods {
  open: () => void;
  close: () => void;
}

const BottomSheet = forwardRef<BottomSheetMethods, Props>(({}, ref) => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const [bottomSheetHeight, setBottomSheetHeight] = useState(1000);
  const OPEN = 0;
  const CLOSE = bottomSheetHeight + insets.bottom;
  const translateY = useSharedValue(CLOSE);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const open = useCallback(() => {
    translateY.value = withTiming(OPEN);
  }, [translateY]);

  const close = useCallback(() => {
    translateY.value = withTiming(CLOSE);
  }, [CLOSE, translateY]);

  useImperativeHandle(
    ref,
    () => ({
      open,
      close,
    }),
    [open, close]
  );

  const pan = Gesture.Pan()
    .onUpdate((event) => {
      if (event.translationY < 0) {
        translateY.value = withSpring(OPEN, {
          damping: 100,
          stiffness: 400,
        });
      } else {
        translateY.value = withSpring(event.translationY, {
          damping: 100,
          stiffness: 400,
        });
      }
    })
    .onEnd(() => {
      if (translateY.value > 50) {
        translateY.value = withSpring(CLOSE, {
          damping: 100,
          stiffness: 400,
        });
      } else {
        translateY.value = withSpring(OPEN, {
          damping: 100,
          stiffness: 400,
        });
      }
    });

  return (
    <>
      <BackDrop translateY={translateY} openHeight={OPEN} closeHeight={CLOSE} close={close}/>
      <GestureDetector gesture={pan}>
        <Animated.View
          onLayout={({ nativeEvent }) => {
            const { height } = nativeEvent.layout;
            if (height) {
              setBottomSheetHeight(height);
              translateY.value = withTiming(height + insets.bottom)
            }
          }}
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
});

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffff1",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 120,
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
