import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { EventSliderType } from "@/assets/data/eventData";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  item: EventSliderType;
  index: number;
  scrollX: SharedValue<number>;
};

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.75;

const SliderItem = ({ item, index, scrollX }: Props) => {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [
              (index - 1) * ITEM_WIDTH,
              index * ITEM_WIDTH,
              (index + 1) * ITEM_WIDTH,
            ],
            [-ITEM_WIDTH * 0.25, 0, ITEM_WIDTH * 0.25],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.itemContainer, rnAnimatedStyle]}>
      <View style={styles.imageWrapper}>
        <Image source={item.image} style={styles.image} />
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
          style={styles.gradient}
        />
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </Animated.View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: ITEM_WIDTH,
    paddingVertical: 20,
    marginHorizontal: 20,
  },
  imageWrapper: {
    width: 237,
    height: 148,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "60%",
  },
  textWrapper: {
    marginTop: 10,
    width: 237,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    marginTop: 4,
    fontSize: 14,
    color: "#444",
  },
});
