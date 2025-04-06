import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { useHeaderStore } from "@/store/headerStore";
import { useCallback } from "react";

export default function EventDetailPage() {
  const { id, title, description } = useLocalSearchParams();
  const setHeader = useHeaderStore((state) => state.setHeader);

  useFocusEffect(
    useCallback(() => {
      setHeader("", true, false, false);
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event ID: {id}</Text>
      <Text style={styles.title}>Title: {title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
});
