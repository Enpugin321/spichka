// app/profile/[id]/index.tsx

import { View, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useHeaderStore } from "@/store/headerStore";
import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import TicketItem from "@/components/TicketItem";

import { imageSlider } from "@/assets/data/eventData";

export default function MyTicketsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const setHeader = useHeaderStore((state) => state.setHeader);

  useFocusEffect(
    useCallback(() => {
      setHeader({
        showBack: true,
        showAvatar: false,
        showProfileBar: true,
      });
    }, [])
  );

  return (
    <View style={styles.container}>
      {imageSlider.map((item) => (
        <TicketItem key={item.id} title={item.title} date={item.date} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 8,
  },
});
