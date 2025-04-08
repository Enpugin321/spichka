import { View, Text } from "react-native";
import { useHeaderStore } from "@/store/headerStore";

import React, { useCallback } from "react";
import CollectionComponent from "@/components/CollectionComponent";
import { imageSlider } from "@/assets/data/eventData";
import { useFocusEffect } from "expo-router";

export default function EventsPage() {
  const setHeader = useHeaderStore((state) => state.setHeader);

  useFocusEffect(
    useCallback(() => {
      setHeader({
        title: "На повестке дня",
        showBack: true,
        showAvatar: true,
        showProfileBar: false,
      });

      return () => {
        useHeaderStore.setState({ title: "" });
      };
    }, [])
  );

  return (
    <View style={{ paddingHorizontal: 24, backgroundColor: "white" }}>
      <CollectionComponent itemList={imageSlider} />
    </View>
  );
}
