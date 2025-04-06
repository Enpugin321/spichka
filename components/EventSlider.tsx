import { View, FlatList, Text } from "react-native";
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

const EventSlider = ({ itemList }: Props) => {
  const scrollX = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });

  return (
    <View>
      <Animated.FlatList
        data={itemList}
        renderItem={({ item, index }) => (
          <SliderItem item={item} index={index} scrollX={scrollX} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        pagingEnabled
        onScroll={onScrollHandler}
      />
    </View>
  );
};

export default EventSlider;
