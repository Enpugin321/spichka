// app/profile/[id]/index.tsx

import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useHeaderStore } from "@/store/headerStore";
import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function MyTicketsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const setHeader = useHeaderStore((state) => state.setHeader);

  useFocusEffect(
    useCallback(() => {
      setHeader("Профиль", true, false, true);
    }, [])
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Мои билеты для пользователя {id}</Text>
      {/* тут список билетов */}
    </View>
  );
}
