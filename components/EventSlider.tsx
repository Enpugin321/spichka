import { View, Dimensions } from "react-native";
import React from "react";

import { EventSliderType } from "@/assets/data/eventData";
import SliderItem from "@/components/SliderItem";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

type Props = {
  itemList: EventSliderType[];
};

const { width } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.75;
const ITEM_MARGIN = 20;
const ITEM_SPACING = ITEM_MARGIN * 2;
const SNAP_INTERVAL = ITEM_WIDTH + ITEM_SPACING;

const EventSlider = ({ itemList }: Props) => {
  const scrollX = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });

  return (
    <View style={{ flexShrink: 1 }}>
      <Animated.FlatList
        data={itemList}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} scrollX={scrollX} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={SNAP_INTERVAL}
        bounces={false}
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingHorizontal: (width - ITEM_WIDTH) / 2 - ITEM_MARGIN,
        }}
      />
    </View>
  );
};

export default EventSlider;
