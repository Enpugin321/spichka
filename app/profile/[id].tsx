import { useLocalSearchParams } from "expo-router";
import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useHeaderStore } from "@/store/headerStore";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const setHeader = useHeaderStore((state) => state.setHeader);

  useFocusEffect(
    useCallback(() => {
      setHeader("Профиль", true);
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Профиль</Text>
      <Text>Тут будет информация о пользователе... {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
