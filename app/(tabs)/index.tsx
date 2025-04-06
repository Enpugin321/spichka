import { useHeaderStore } from "@/store/headerStore";
import { useFocusEffect } from "@react-navigation/native"; // Вызывается каждый раз, когда экран становится активным
import { useCallback } from "react";

import { View, StyleSheet, Button, ScrollView } from "react-native";

import { ArrowRight } from "@/components/ui/ArrowRight";
import SwiperComponent from "@/components/SwiperComponent";
import EventSlider from "@/components/EventSlider";

import { ThemedText } from "@/components/ThemedText";

import { imageSlider } from "@/assets/data/eventData";

export default function HomeScreen() {
  const setHeader = useHeaderStore((state) => state.setHeader);

  useFocusEffect(
    useCallback(() => {
      setHeader("", false);
    }, [])
  );
  return (
    <ScrollView
      style={styles.scrollViewContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.blockContainer}>
        <SwiperComponent />
      </View>

      <View style={styles.blockContainer}>
        <View style={styles.titleContainer}>
          <ThemedText type="title">На повестке дня</ThemedText>
          <ArrowRight />
        </View>
        <View style={styles.sliderWrapper}>
          <EventSlider itemList={imageSlider} />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: "white",
  },
  contentContainer: {
    flexDirection: "column",
    gap: 50,
  },
  blockContainer: {
    paddingHorizontal: 24,
  },
  sliderWrapper: {
    marginHorizontal: -48, // убираем отступ из blockContainer
    marginTop: 16, // отступ между заголовком и слайдером
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
