import { useHeaderStore } from "@/store/headerStore";
import { useFocusEffect } from "@react-navigation/native"; // Вызывается каждый раз, когда экран становится активным
import { useCallback } from "react";
import { useRouter } from "expo-router";

import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import { ArrowRight } from "@/components/ui/ArrowRight";
import SwiperComponent from "@/components/SwiperComponent";
import EventSlider from "@/components/EventSlider";

import { ThemedText } from "@/components/ThemedText";

import { imageSlider } from "@/assets/data/eventData";
import { collectionData } from "@/assets/data/collectionData";
import CollectionComponent from "@/components/CollectionComponent";

export default function HomeScreen() {
  const setHeader = useHeaderStore((state) => state.setHeader);
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      setHeader({
        showBack: false,
        showAvatar: true,
        showProfileBar: false,
      });
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

      <View>
        <View style={styles.blockContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => router.push("/(tabs)/events")}
          >
            <View style={styles.titleContainer}>
              <ThemedText type="title">На повестке дня</ThemedText>
              <ArrowRight />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <EventSlider itemList={imageSlider} />
        </View>
      </View>

      <View style={styles.blockContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => router.push("/(tabs)/collections")}
        >
          <View style={styles.titleContainer}>
            <ThemedText type="title">Подборки редакции</ThemedText>
            <ArrowRight />
          </View>
        </TouchableOpacity>
        <CollectionComponent itemList={collectionData.slice(0, 4)} />
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
    paddingBottom: 110,
  },
  blockContainer: {
    paddingHorizontal: 24,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 15,
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
