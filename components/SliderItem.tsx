import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import React from "react";
import { useRouter } from "expo-router";

import { EventSliderType } from "@/assets/data/eventData";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  item: EventSliderType;
  index: number;
  scrollX: SharedValue<number>;
};

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.75;
const ITEM_MARGIN = 20;
const ITEM_SPACING = ITEM_MARGIN * 2;
const SNAP_INTERVAL = ITEM_WIDTH + ITEM_SPACING;

const SliderItem = ({ item, index, scrollX }: Props) => {
  const router = useRouter();

  const rnAnimatedStyle = useAnimatedStyle(() => {
    const activeIndex = Math.round(scrollX.value / SNAP_INTERVAL);

    let shiftX = 0;
    if (activeIndex === 0) {
      shiftX = -64;
    } else {
      shiftX = 0;
    }

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
            [-ITEM_WIDTH * 0.25 + shiftX, shiftX, ITEM_WIDTH * 0.25 + shiftX],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const handlePress = () => {
    router.push({
      pathname: "/event/[id]",
      params: {
        id: item.id,
        title: item.title,
        description: item.description,
      },
    });
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
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
          <Text style={styles.description}>{item.date}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: ITEM_WIDTH,
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
