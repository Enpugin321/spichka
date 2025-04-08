import { View, Text, ScrollView } from "react-native";
import { useHeaderStore } from "@/store/headerStore";

import React, { useCallback } from "react";
import CollectionComponent from "@/components/CollectionComponent";
import { collectionData } from "@/assets/data/collectionData";
import { useFocusEffect } from "expo-router";

export default function CollectionsPage() {
  const setHeader = useHeaderStore((state) => state.setHeader);

  useFocusEffect(
    useCallback(() => {
      setHeader({
        title: "Подборки редакции",
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
    <ScrollView style={{ paddingHorizontal: 24, backgroundColor: "white" }}>
      <CollectionComponent itemList={collectionData} />
    </ScrollView>
  );
}
